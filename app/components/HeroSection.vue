<script setup lang="ts">
import { OmbreVapor2 } from '@ombre-ui/vue'

defineProps<{
  title?: string
  description?: string
  links?: {
    label: string
    to: string
  }[]
}>()
</script>

<template>
  <UPageHero
    :title="title"
    :description="description"
    :links="links"
  >
    <OmbreVapor2 color-a="#28445C" color-b="#53CBCF" class="-z-10" />
  </UPageHero>
</template>
