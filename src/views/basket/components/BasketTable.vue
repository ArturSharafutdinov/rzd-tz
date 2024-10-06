<template>
  <q-table
    :rows="basketKeys"
    :columns="COLUMNS"
    :rows-per-page-options="[0]"
    hide-pagination
    :title="$t('basket.table.title')"
    :no-data-label="$t('basket.table.noData')"
  >
    <template v-slot:body-cell-index="props">
      <q-td :props="props">
        {{ props.rowIndex + 1 }}
      </q-td>
    </template>
    <template v-slot:body-cell-name="props">
      <q-td :props="props" class="flex items-center">
        <basket-product-card :product="props.row" />
      </q-td>
    </template>
    <template v-slot:body-cell-quantity="props">
      <q-td :props="props">
        <div class="flex items-center">
          <q-btn icon="mdi-minus" size="sm" dense @click="decreaseProductCount(props.row)" />
          <span class="q-mx-md">{{ basket.get(props.row) }}</span>
          <q-btn icon="mdi-plus" size="sm" dense @click="increaseProductCount(props.row)" />
        </div>
      </q-td>
    </template>
    <template v-slot:body-cell-price="props">
      <q-td :props="props">
        {{ props.value }}$
      </q-td>
    </template>
    <template v-slot:body-cell-summary="props">
      <q-td :props="props">
        <span style="text-decoration: underline">{{ getSummaryForProduct(props.row) }}$</span>
      </q-td>
    </template>
    <template #bottom>
      <div v-if="basketSize > 0" class="flex items-center justify-between q-my-md full-width">
        <span class="text-h5">{{ $t('basket.table.summary', [ basketSize, totalPrice ]) }}</span>
        <q-btn @click="emit('completeOrder')">
          {{ $t('btn.makeOrder') }}
        </q-btn>
      </div>
    </template>
  </q-table>
</template>

<script setup lang="ts">

import BasketProductCard from '@/views/basket/components/BasketProductCard.vue'
import { useBasketStore } from '@/stores/basket.store'
import { computed } from 'vue'
import type { Product } from '@/model/product'
import { i18n } from '@/locale/i18n'

const COLUMNS = [
  {
    name: 'index',
    label: '№',
    field: 'index'
  },
  {
    name: 'name', label: i18n.global.t('basket.table.columns.name'), align: 'left'
  },
  {
    name: 'quantity', label: i18n.global.t('basket.table.columns.quantity'), align: 'left'
  },
  {
    name: 'price', field: 'price', label: i18n.global.t('basket.table.columns.price'), align: 'left'
  },
  {
    name: 'summary', label: i18n.global.t('basket.table.columns.summary'), align: 'left'
  }
]

const emit = defineEmits([ 'completeOrder' ])

const basketStore = useBasketStore()

const basket = computed<Map<Product, number>>(() => basketStore.basket)
const basketSize = computed<number>(() => basketStore.basketSize)
const totalPrice = computed<string>(() => basketStore.totalPrice + '$')

const basketKeys = computed<Product[]>(() => [ ...basketStore.basket.keys() ])

const increaseProductCount = (product: Product) => {
  basketStore.addToBasket(product)
}

const decreaseProductCount = (product: Product) => {
  basketStore.removeFromBasket(product)
}

const getSummaryForProduct = (product: Product) => {
  return (product.price * (basket.value.get(product) ?? 0)).toFixed(2)
}

</script>