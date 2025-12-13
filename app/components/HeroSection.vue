<script setup lang="ts">
import { OmbreVapor2 } from '@ombre-ui/vue'

interface HeroSection {
  id?: number
  title?: string
  description?: string
  callbackButton?: string
}

const { getSingletonItem } = useDirectusItems()

const { data: heroSection } = await useAsyncData('sibbalance_hero', () => {
  return getSingletonItem<HeroSection>({
    collection: 'sibbalance_hero'
  })
})
</script>

<template>
  <UPageHero
    :title="heroSection?.title"
    :description="heroSection?.description"
    :links="[{
      label: heroSection?.callbackButton,
      to: '#contact-us'
    }]"
  >
    <OmbreVapor2 color-a="#28445C" color-b="#53CBCF" class="-z-10" />
  </UPageHero>
</template>
