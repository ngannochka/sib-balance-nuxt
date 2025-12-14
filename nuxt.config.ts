// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', 'nuxt-directus', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },
  runtimeConfig: {
    public: {
      directus: {
        url: process.env.NUXT_PUBLIC_DIRECTUS_URL
      },
      captchaClientKey: process.env.NUXT_PUBLIC_CAPTCHA_CLIENT_KEY
    },
  },
  nitro: {
    preset: 'bun'
  },
})
