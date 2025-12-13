<script setup lang="ts">
interface Header {
  id?: number
  callbackButton?: string
}

const { getSingletonItem } = useDirectusItems()

const { data } = await useAsyncData('sibbalance_header', () => {
  return getSingletonItem<Header>({
    collection: 'sibbalance_header'
  })
})
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/">
        <img src="/header/header-logo.svg" alt="Логотип компании Sib Balance" class="h-9" />
      </NuxtLink>
    </template>

    <NavigationMenu />

    <template #body>
      <NavigationMenu />

      <UButton to="#contact-us">
        {{ data?.callbackButton }}
      </UButton>
    </template>

    <template #right>
      <UButton to="#contact-us" class="hidden lg:flex">
        {{ data?.callbackButton }}
      </UButton>
    </template>
  </UHeader>
</template>
