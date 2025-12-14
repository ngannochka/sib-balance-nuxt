<script setup lang="ts">
interface BlogSection {
  id?: number
  title?: string
  showMoreButton?: string
}

interface Post {
  id?: number
  image?: string
  date?: string
  title?: string
  description?: string
}

const { getSingletonItem, getItems } = useDirectusItems()

const { data: blogSection } = await useAsyncData('sibbalance_blog', () => {
  return getSingletonItem<BlogSection>({
    collection: 'sibbalance_blog',
  })
})

const { data: posts } = await useAsyncData('sibbalance_posts', () => {
  return getItems<Post>({
    collection: 'sibbalance_post',
  })
})

const {
  visibleItems: visiblePosts,
  hasMoreItems: hasMorePosts,
  handleShowMore
} = useShowMoreItems(3, 3, posts.value)
</script>

<template>
  <UPageSection
    id="blog"
    :title="blogSection?.title"
    :ui="{
      root: 'md:bg-[url(/blog/bgi.png)] md:bg-bottom-left md:bg-no-repeat'
    }"
  >
    <UPageGrid class="mb-6">
      <UBlogPost
        v-for="({ image, date, title, description }, index) in visiblePosts"
        :key="index"
        :image="`https://cms.sibbalance.ru/assets/${image}`"
        :title
        :description
        variant="soft"
      >
        <template #date>
          {{
            new Intl.DateTimeFormat('ru-RU', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }).format(new Date(date!))
          }}
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
      {{ blogSection?.showMoreButton }}
    </UButton>
  </UPageSection>
</template>
