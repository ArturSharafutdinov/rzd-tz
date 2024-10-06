<template>
  <q-btn @click="addRandomProduct">Add random</q-btn>
</template>

<script setup lang="ts">

// testing
import { useProductStore } from '@/stores/product.store'
import { computed, watch } from 'vue'
import type { Product } from '@/model/product'
import { useBasketStore } from '@/stores/basket.store'

const productStore = useProductStore()
const basketStore = useBasketStore()

productStore.getAllProducts()
const products = computed<Product[]>(() => productStore.products)

watch(products, (newVal: Product[]) => {
  if(newVal?.length > 0) {
    basketStore.addToBasket(newVal[0])
    basketStore.addToBasket(newVal[0])
  }
})

const addRandomProduct = () => {
  basketStore.addToBasket(products.value[Math.floor(Math.random() * products.value.length)])
}

</script>