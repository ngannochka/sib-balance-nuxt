<script setup lang="ts">
defineProps<{
  title?: string
  cards?: {
    icon: string
    title: string
    description: string
  }[]
}>()
</script>

<template>
  <UPageSection
    id="advantages"
    :title="title"
    :ui="{
      root: 'md:bg-[url(/advantages/bgi.png)] md:bg-bottom-right md:bg-no-repeat'
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
