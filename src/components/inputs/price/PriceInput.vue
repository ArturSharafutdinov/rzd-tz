<template>
  <div class="flex justify-between">
    <price-input-card v-model="minPrice" :label="$t('input.price.min')" />
    <price-input-card v-model="maxPrice" :label="$t('input.price.max')" />
  </div>
</template>
<script setup lang="ts">

import PriceInputCard from '@/components/inputs/price/PriceInputCard.vue'

const minPrice = defineModel('minPrice', { required: true })
const maxPrice = defineModel('maxPrice', { required: true })

</script>