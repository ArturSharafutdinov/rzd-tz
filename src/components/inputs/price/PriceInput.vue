<template>
  <div class="flex justify-between">
    <price-input-card v-model="minPrice" :label="$t('input.price.min')" style="width: 45%" />
    <price-input-card v-model="maxPrice" :label="$t('input.price.max')" />
  </div>
  <div v-if="showErrorMessage" class="q-mt-sm error-message text-red text-center"> {{ $t('filter.priceErrorMessage') }}
  </div>
</template>
<script setup lang="ts">

import PriceInputCard from '@/components/inputs/price/PriceInputCard.vue'
import { ref, watch } from 'vue'
import { ProductFilter } from '@/model/product'

const emit = defineEmits([ 'validation' ])

const minPrice = defineModel<number>('minPrice', { required: true })
const maxPrice = defineModel<number>('maxPrice', { required: true })

const showErrorMessage = ref<boolean>(false)

// @ts-ignore
watch([ minPrice, maxPrice ], (newVal: number[]) => {
  showErrorMessage.value = newVal[0] > newVal[1]
  emit('validation', (newVal[0] ?? ProductFilter.MIN_PRICE) <= (newVal[1] ?? ProductFilter.MAX_PRICE))
})

</script>