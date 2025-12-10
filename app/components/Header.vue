<script setup lang="ts">
defineProps<{
  callbackButton?: string
}>()
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/">
        <NuxtImg src="/header/logo.svg" alt="Логотип компании Sib Balance" class="h-9" />
      </NuxtLink>
    </template>

    <NavigationMenu />

    <template #body>
      <NavigationMenu />

      <UButton to="#contact-us">
        {{ callbackButton }}
      </UButton>
    </template>

    <template #right>
      <UButton to="#contact-us" class="hidden lg:flex">
        {{ callbackButton }}
      </UButton>
    </template>
  </UHeader>
</template>
