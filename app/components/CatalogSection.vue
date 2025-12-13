<script setup lang="ts">
interface CatalogSection {
  id?: number
  title?: string
  showMoreButton?: string
  callbackButton?: string
}

interface ProductCard {
  id?: number
  image?: string
  price?: string
  title?: string
  description?: string
}

const { getSingletonItem, getItems } = useDirectusItems()
const { getThumbnail } = useDirectusFiles()

const { data: catalogSection } = await useAsyncData('sibbalance_catalog', () => {
  return getSingletonItem<CatalogSection>({
    collection: 'sibbalance_catalog',
  })
})

const { data: products } = await useAsyncData('sibbalance_products', () => {
  return getItems<ProductCard>({
    collection: 'sibbalance_product',
  })
})

const {
  visibleItems: visibleProducts,
  hasMoreItems: hasMoreProducts,
  handleShowMore
} = useShowMoreItems(3, 3, products.value)
</script>

<template>
  <UPageSection
    id="catalog"
    :title="catalogSection?.title"
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
          <NuxtImg :src="`https://cms.sibbalance.ru/assets/${image}`" :alt="title" class="rounded-lg" />
        </template>

        <template #leading>
          {{ price }}

          <UIcon name="i-lucide-russian-ruble" class="size-4" />
        </template>

        <template #footer>
          <UButton to="#contact-us">
            {{ catalogSection?.callbackButton }}
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
      {{ catalogSection?.showMoreButton }}
    </UButton>
  </UPageSection>
</template>
