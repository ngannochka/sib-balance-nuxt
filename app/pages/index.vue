<script setup lang="ts">
// const { data: indexPage } = await useAsyncData('index', () => {
//   return queryCollection('index')
//     .first()
// })
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
