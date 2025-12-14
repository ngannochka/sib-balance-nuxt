<script setup lang="ts">
useHead({
  link: [
    { rel: 'canonical', href: 'https://sibbalance.ru/' }
  ]
})

useSeoMeta({
  title: 'Sib Balance',
  description: 'Sib Balance — сибирский бренд натуральных продуктов для поддержки здоровья и восстановления организма по строгим стандартам GMP.',
  ogTitle: 'Sib Balance',
  ogDescription: 'Sib Balance — сибирский бренд натуральных продуктов для поддержки здоровья и восстановления организма по строгим стандартам GMP.',
  ogImage: '/ogImage.png',
  ogUrl: 'https://sibbalance.ru/'
})
</script>

<template>
  <Header />
  <UMain>
    <HeroSection />
    <CatalogSection />
    <AboutSection />
    <AdvantagesSection />
    <BlogSection />
    <ContactUsSection />
  </UMain>
  <Footer />
</template>
