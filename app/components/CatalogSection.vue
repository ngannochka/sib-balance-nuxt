<script setup lang="ts">
const { items } = defineProps<{
  title?: string
  items?: {
    image: string
    price: number
    title: string
    description: string
  }[],
  callbackButton?: string
  showMoreButton?: string
}>()

const {
  visibleItems: visibleProducts,
  hasMoreItems: hasMoreProducts,
  handleShowMore
} = useShowMoreItems(3, 3, items)
</script>

<template>
  <UPageSection
    id="catalog"
    :title="title"
    :ui="{
      root: 'md:bg-[url(/catalog/bgi.png)] md:bg-bottom-right md:bg-no-repeat md:bg-size-[250px_auto]'
    }"
  >
    <UPageGrid class="mb-6">
      <UPageCard
        v-for="({ image, price, title, description }, index) in visibleProducts"
        :key="index"
        :title
        :description
        variant="naked"
      >
        <template #header>
          <NuxtImg :src="image" class="rounded-lg" />
        </template>

        <template #leading>
          {{ price }}

          <UIcon name="i-lucide-russian-ruble" class="size-4"/>
        </template>

        <template #footer>
          <UButton to="#contact-us">
            {{ callbackButton }}
          </UButton>
        </template>
      </UPageCard>
    </UPageGrid>

    <UButton
      size="xl"
      icon="i-lucide-chevrons-down"
      class="self-center lg:justify-self-center"
      v-if="hasMoreProducts"
      @click="handleShowMore"
    >
      {{ showMoreButton }}
    </UButton>
  </UPageSection>
</template>
