<script setup lang="ts">
const { data: indexPage } = await useAsyncData('index', () => {
  return queryCollection('index')
    .first()
})
</script>

<template>
  <Header
    :callbackButton="indexPage?.header.callbackButton"
  />

  <UMain>
    <HeroSection
      :title="indexPage?.heroSection.title"
      :description="indexPage?.heroSection.description"
      :links="indexPage?.heroSection.links"
    />

    <CatalogSection
      :title="indexPage?.catalogSection.title"
      :items="indexPage?.catalogSection.items"
      :callbackButton="indexPage?.catalogSection.callbackButton"
      :showMoreButton="indexPage?.catalogSection.showMoreButton"
    />

    <AboutSection
      :title="indexPage?.aboutSection.title"
      :description="indexPage?.aboutSection.description"
      :cards="indexPage?.aboutSection.cards"
    />

    <AdvantagesSection
      :title="indexPage?.advantagesSection.title"
      :cards="indexPage?.advantagesSection.cards"
    />

    <BlogSection
      :title="indexPage?.blogSection.title"
      :items="indexPage?.blogSection.items"
      :showMoreButton="indexPage?.blogSection.showMoreButton"
    />

    <ContactUsSection
      :title="indexPage?.contactUsSection.title"
      :submitButton="indexPage?.contactUsSection.submitButton"
    />
  </UMain>

  <Footer
    :email="indexPage?.footer.email"
    :phone="indexPage?.footer.phone"
  />
</template>
