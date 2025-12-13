<script setup lang="ts">
import { OmbreVapor2 } from '@ombre-ui/vue'

interface Hero {
  id?: number
  title?: string
  description?: string
  callbackButton?: string
}

const { getSingletonItem } = useDirectusItems()

const { data } = await useAsyncData('sibbalance_hero', () => {
  return getSingletonItem<Hero>({
    collection: 'sibbalance_hero'
  })
})
</script>

<template>
  <UPageHero
    :title="data?.title"
    :description="data?.description"
    :links="[{
      label: data?.callbackButton,
      to: '#contact-us'
    }]"
  >
    <OmbreVapor2 color-a="#28445C" color-b="#53CBCF" class="-z-10" />
  </UPageHero>
</template>
