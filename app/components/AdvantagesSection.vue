<script setup lang="ts">
interface AdvantagesSection {
  id?: number
  title?: string
}

interface AdvantageCard {
  id?: number
  icon?: string
  title?: string
  description?: string
}

const { getSingletonItem, getItems } = useDirectusItems()

const { data: advantagesSection } = await useAsyncData('sibbalance_advantages', () => {
  return getSingletonItem<AdvantagesSection>({
    collection: 'sibbalance_advantages',
  })
})

const { data: advantageCards } = await useAsyncData('sibbalance_advantage', () => {
  return getItems<AdvantageCard>({
    collection: 'sibbalance_advantage',
  })
})
</script>

<template>
  <UPageSection
    id="advantages"
    :title="advantagesSection?.title"
    :ui="{
      root: 'md:bg-[url(/advantages/bgi.png)] md:bg-bottom-right md:bg-no-repeat'
    }"
  >
    <UPageGrid>
      <UPageCard
        v-for="(card, index) in advantageCards"
        :key="index"
        v-bind="card"
        variant="solid"
      />
    </UPageGrid>
  </UPageSection>
</template>
