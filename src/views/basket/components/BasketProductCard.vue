<template>
  <div class="flex items-center">
    <q-img :src="product.image" :width="imageSizes.width" :height="imageSizes.height" />
    <span class="q-ml-md">{{ product.title }}</span>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Product } from '@/model/product'

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

const imageSizes = {
  width: '30px',
  height: '30px'
}
</script>

