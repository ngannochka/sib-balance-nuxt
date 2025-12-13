<script setup lang="ts">
interface AboutSection {
  id?: number
  title?: string
  description?: string
}

interface PhilosophyCard {
  id?: number
  title?: string
  showMoreButton?: string
  callbackButton?: string
}

const { getSingletonItem, getItems } = useDirectusItems()

const { data: aboutSection } = await useAsyncData('sibbalance_about', () => {
  return getSingletonItem<AboutSection>({
    collection: 'sibbalance_about',
  })
})

const { data: philosophyCards } = await useAsyncData('sibbalance_philosophy', () => {
  return getItems<PhilosophyCard>({
    collection: 'sibbalance_philosophy',
  })
})
</script>

<template>
  <UPageSection
    id="about"
    :title="aboutSection?.title"
    :description="aboutSection?.description"
    :ui="{
      root: 'md:bg-[url(/about/bgi.png)] md:bg-bottom-left md:bg-no-repeat'
    }"
  >
    <UPageGrid>
      <UPageCard
        v-for="(card, index) in philosophyCards"
        :key="index"
        v-bind="card"
        variant="solid"
      />
    </UPageGrid>
  </UPageSection>
</template>
