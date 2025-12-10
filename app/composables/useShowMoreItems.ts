export const useShowMoreItems = <T>(
  initialVisibleItemsCount: number,
  step: number,
  items: T[] = []
) => {
  const visibleItemsCount = ref(initialVisibleItemsCount)

  const visibleItems = computed(() => {
    return items.slice(0, visibleItemsCount.value)
  })

  const hasMoreItems = computed(() => {
    return visibleItemsCount.value < items.length
  })

  const handleShowMore = () => {
    visibleItemsCount.value += step
  }

  return {
    visibleItems,
    hasMoreItems,
    handleShowMore,
  }
}
