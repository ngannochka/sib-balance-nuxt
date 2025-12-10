<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  cards?: {
    icon: string
    title: string
    description: string
  }[]
}>()
</script>

<template>
  <UPageSection
    id="about"
    :title="title"
    :description="description"
    :ui="{
      root: 'md:bg-[url(/about/bgi.png)] md:bg-bottom-left md:bg-no-repeat'
    }"
  >
    <UPageGrid>
      <UPageCard
        v-for="(card, index) in cards"
        :key="index"
        v-bind="card"
        variant="solid"
      />
    </UPageGrid>
  </UPageSection>
</template>
