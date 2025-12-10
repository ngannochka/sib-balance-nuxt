// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/ui', 'nuxt-studio'],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },
  runtimeConfig: {
    public: {
      captchaClientKey: process.env.NUXT_PUBLIC_CAPTCHA_CLIENT_KEY,
    },
    captchaServerKey: process.env.CAPTCHA_SERVER_KEY,
    bitrixLeadAddUrl: process.env.BITRIX_LEAD_ADD_URL
  },
  nitro: {
    preset: 'bun'
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  }
})