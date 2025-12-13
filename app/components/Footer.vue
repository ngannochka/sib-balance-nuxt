<script setup lang="ts">
interface Footer {
  id?: number
  email?: string
  phone?: string
}

const { getSingletonItem } = useDirectusItems()

const { data: footer } = await useAsyncData('sibbalance_footer', () => {
  return getSingletonItem<Footer>({
    collection: 'sibbalance_footer',
  })
})
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-sm text-white">
        © {{ new Date().getFullYear() }}. Все права защищены.
      </p>
    </template>

    <NavigationMenu
      :ui="{
        list: 'flex flex-col lg:flex-row',
        link: 'text-white'
      }"
    />

    <template #right>
      <UButton
        icon="i-lucide-mail"
        color="neutral"
        variant="ghost"
        :to="`mailto:${footer?.email}`"
        aria-label="Почта"
        :ui="{
          base: 'text-white',
          leadingIcon: 'text-white size-4'
        }"
      >
        {{ footer?.email }}
      </UButton>

      <UButton
        icon="i-lucide-phone"
        color="neutral"
        variant="ghost"
        :to="`tel:${footer?.phone}`"
        aria-label="Номер телефона"
        :ui="{
          base: 'text-white',
          leadingIcon: 'text-white size-4'
        }"
      >
        {{ footer?.phone }}
      </UButton>
    </template>

    <template #top>
      <UContainer class="flex justify-center">
        <NuxtLink to="/">
          <NuxtImg src="/footer/logo.svg" alt="Логотип компании Sib Balance" class="h-9" />
        </NuxtLink>
      </UContainer>
    </template>

    <template #bottom>
      <UContainer class="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-2">
        <p class="text-xs text-white opacity-40">
          ооо "СИББАЛАНС"
        </p>
        <p class="text-xs text-white opacity-40">
          инн 5403079500
        </p>
        <p class="text-xs text-white opacity-40">
          огрн 1235400030535
        </p>
      </UContainer>
    </template>
  </UFooter>
</template>
