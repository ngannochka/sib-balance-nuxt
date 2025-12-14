import { z } from 'zod'

const captchaServerKey = process.env.CAPTCHA_SERVER_KEY
const bitrixLeadAddUrl = process.env.BITRIX_LEAD_ADD_URL

if (!captchaServerKey || !bitrixLeadAddUrl)
  throw new Error('Не указаны переменные окружения')

const captchaSuccessSchema = z.object({
  status: z.literal('ok'),
  message: z.string(),
  host: z.string(),
})

const captchaErrorSchema = z.object({
  status: z.literal('failed'),
  message: z.string(),
})

const CaptchaResponseSchema = z
  .union([
    captchaSuccessSchema,
    captchaErrorSchema,
  ])
  .catch({
    status: 'ok',
    message: '',
    host: ''
  })

const LeadSchema = z.object({
  data: z.object({
    name: z.string(),
    email: z.email(),
    phone: z.string(),
  }),
  captcha: z.object({
    captchaToken: z.string(),
  })
})

const validateCaptcha = async (captchaServerKey: string, captchaToken: string) => {
  try {
    const body = new URLSearchParams({
      secret: captchaServerKey,
      token: captchaToken,
    }).toString()

    const response = await fetch('https://smartcaptcha.cloud.yandex.ru/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body,
    })

    const result = await response.json()

    const parsed = CaptchaResponseSchema.parse(result)

    if (parsed.status === 'failed')
      return false

    return true
  } catch (error) {
    console.error(error)

    return true
  }
}

const createLead = async ({ name, phone, email }: { name: string, phone: string, email: string }) => {
  try {
    const response = await $fetch(bitrixLeadAddUrl, {
      method: 'POST',
      body: {
        fields: {
          TITLE: 'Лид с сайта Sib Balance',
          NAME: name,
          PHONE: [{
            VALUE: phone,
            VALUE_TYPE: 'WORK',
          }],
          EMAIL: [{
            VALUE: email,
            VALUE_TYPE: 'WORK',
          }],
          SOURCE_ID: 'WEB',
          STATUS_ID: 'NEW',
          ASSIGNED_BY_ID: 71,
        },
        params: {
          REGISTER_SONET_EVENT: 'Y'
        }
      },
    })

    return true
  } catch (error) {
    console.error(error)

    return false
  }
}

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, body => LeadSchema.safeParse(body))

  if (!result.success){
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      data: {
        errors: z.treeifyError(result.error),
        message: 'Некорректные данные запроса'
      }
    })
  }

  const isCaptchaValid = await validateCaptcha(captchaServerKey, result.data.captcha.captchaToken)

  if (!isCaptchaValid) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      data: {
        message: 'Неверный токен капчи',
      }
    })
  }

  const lead = await createLead(result.data.data)

  if (!lead) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Bad Gateway',
      data: {
        message: 'Не удалось создать лид в CRM'
      }
    })
  }

  return {
    data: result.data.data
  }
})
