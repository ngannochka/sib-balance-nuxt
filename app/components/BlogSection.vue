<script setup lang="ts">
const { items } = defineProps<{
  title?: string
  items?: {
    image: string
    date: string
    title: string
    description: string
  }[],
  showMoreButton?: string
}>()

const {
  visibleItems: visiblePosts,
  hasMoreItems: hasMorePosts,
  handleShowMore
} = useShowMoreItems(3, 3, items)
</script>

<template>
  <UPageSection
    id="blog"
    :title="title"
    :ui="{
      root: 'md:bg-[url(/blog/bgi.png)] md:bg-bottom-left md:bg-no-repeat'
    }"
  >
    <UPageGrid class="mb-6">
      <UBlogPost
        v-for="({ image, date, title, description }, index) in visiblePosts"
        :key="index"
        :image
        :title
        :description
        variant="soft"
      >
        <template #date>
          {{ date }}
        </template>
      </UBlogPost>
    </UPageGrid>

    <UButton
      size="xl"
      icon="i-lucide-chevrons-down"
      class="self-center lg:justify-self-center"
      v-if="hasMorePosts"
      @click="handleShowMore"
    >
      {{ showMoreButton }}
    </UButton>
  </UPageSection>
</template>
