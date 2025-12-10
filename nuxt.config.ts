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
    bitrixLeadAddUrl: process.env.BITRIX_LEAD_ADD_URL,
    STUDIO_GITHUB_CLIENT_ID: process.env.STUDIO_GITHUB_CLIENT_ID,
    STUDIO_GITHUB_CLIENT_SECRET: process.env.STUDIO_GITHUB_CLIENT_SECRET,
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
