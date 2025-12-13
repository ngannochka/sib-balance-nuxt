<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'

import { z } from 'zod'
import { vMaska } from 'maska/vue'
import { YandexSmartCaptcha } from '@gladesinger/vue3-yandex-smartcaptcha'

defineProps<{
  title?: string
  submitButton?: string
}>()

const config = useRuntimeConfig()

const captchaClientKey = config.public.captchaClientKey

interface ContactUsSection {
  id?: number
  title?: string
  submitButton?: string
}

const { getSingletonItem } = useDirectusItems()

const { data: contactUsSection } = await useAsyncData('sibbalance_contact_us', () => {
  return getSingletonItem<ContactUsSection>({
    collection: 'sibbalance_contact_us',
  })
})

const schema = z.object({
  name: z.string('Введите имя').min(2, 'Минимум 2 символа'),
  email: z.email({
    error: (issue) => {
      if (issue.code === 'invalid_format')
        return 'Некорректный email'

      return 'Введите email'
    }
  }),
  phone: z.string('Введите номер телефона'),
  agreement: z.boolean(),
  captchaToken: z.string(),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  name: undefined,
  email: undefined,
  phone: undefined,
  agreement: undefined,
  captchaToken: undefined,
})

const isSubmitDisabled = computed(() => {
  return !(state.name && state.email && state.phone && state.agreement && state.captchaToken)
})

const toast = useToast()

const handleCaptchaSuccess = (token: string) => {
  state.captchaToken = token
}

const handleFormSubmit = async (event: FormSubmitEvent<Schema>) => {
  try {
    const { data } = await $fetch('/api/lead', {
      method: 'post',
      body: {
        data: {
          name: event.data.name,
          email: event.data.email,
          phone: event.data.phone,
        },
        captcha: {
          captchaToken: event.data.captchaToken
        }
      },
    })

    toast.add({
      title: 'Заявка принята.',
      description: 'Мы с вами свяжемся с ближайшее время.',
      color: 'primary'
    })
  } catch (error) {
    toast.add({
      title: 'Произошла ошибка!',
      description: 'Попробуйте еще раз.',
      color: 'error'
    })
  }
}
</script>

<template>
  <UPageSection
    id="contact-us"
    :title="contactUsSection?.title"
    :ui="{
      root: 'md:bg-[url(/contactUs/bgi.png)]'
    }"
  >
    <UForm
      class="self-center lg:justify-self-center flex flex-col gap-6 md:shadow-lg md:rounded-lg md:p-6 md:bg-white"
      :schema="schema"
      :state="state"
      @submit="handleFormSubmit"
    >
      <UFormField label="Ваше имя" name="name">
        <UInput placeholder="Иван" v-model="state.name" />
      </UFormField>

      <UFormField label="Email" name="email">
        <UInput placeholder="ivan@gmail.com" v-model="state.email" />
      </UFormField>

      <UFormField label="Номер телефона" name="phone">
        <UInput placeholder="+7 900 000 00 00" v-maska="'+7 ### ### ## ##'" v-model="state.phone" />
      </UFormField>

      <UFormField name="agreement">
        <UCheckbox
          v-model="state.agreement"
          icon="i-lucide-circle-check"
          label="Я согласен(а) на обработку персональных данных"
        />
      </UFormField>

      <ClientOnly>
        <YandexSmartCaptcha
          class="self-center"
          :siteKey="captchaClientKey"
          @onSuccess="handleCaptchaSuccess"
        />
      </ClientOnly>

      <UButton
        type="submit"
        class="self-center"
        :disabled="isSubmitDisabled"
      >
        {{ contactUsSection?.submitButton }}
      </UButton>
    </UForm>
  </UPageSection>
</template>
