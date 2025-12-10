<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  {
    label: 'Каталог',
    to: '#catalog',
  },
  {
    label: 'О компании',
    to: '#about',
  },
  {
    label: 'Преимущества',
    to: '#advantages',
  },
  {
    label: 'Блог',
    to: '#blog',
  },
  {
    label: 'NovoLand',
    to: 'https://novoland54.ru/',
    target: '_blank',
  }
]
</script>

<template>
  <UNavigationMenu
    :items="items"
    :ui="{
      list: 'flex flex-col lg:flex-row',
      link: 'text-primary',
    }"
  />
</template>
