import { defineCollection, defineContentConfig, property } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'data',
      source: 'index/**.json',
      schema: z.object({
        header: property(z.object({})).inherit('app/components/Header.vue'),
        heroSection: property(z.object({})).inherit('app/components/HeroSection.vue'),
        catalogSection: property(z.object({})).inherit('app/components/CatalogSection.vue'),
        aboutSection: property(z.object({})).inherit('app/components/AboutSection.vue'),
        advantagesSection: property(z.object({})).inherit('app/components/AdvantagesSection.vue'),
        blogSection: property(z.object({})).inherit('app/components/BlogSection.vue'),
        contactUsSection: property(z.object({})).inherit('app/components/ContactUsSection.vue'),
        footer: property(z.object({})).inherit('app/components/Footer.vue'),
      })
    }),
  }
})
