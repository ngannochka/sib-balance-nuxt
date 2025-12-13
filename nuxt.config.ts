// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-studio',
    'nuxt-directus'
  ],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },
  runtimeConfig: {
    public: {
      captchaClientKey: process.env.NUXT_PUBLIC_CAPTCHA_CLIENT_KEY,
      // directusUrl: process.env.NUXT_PUBLIC_DIRECTUS_URL,
      directus: {
        url: process.env.NUXT_PUBLIC_DIRECTUS_URL
      }
    },
    captchaServerKey: process.env.CAPTCHA_SERVER_KEY,
    bitrixLeadAddUrl: process.env.BITRIX_LEAD_ADD_URL,
  },
  nitro: {
    preset: 'bun'
  },
  studio: {
    repository: {
      provider: 'github',
      owner: 'ngannochka',
      repo: 'sib-balance-nuxt',
      branch: 'main',
    }
  }
})
