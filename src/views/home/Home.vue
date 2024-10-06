<template>
  <div>
    <product-filter />
    <q-page class="q-pa-md full-height">
      <products />
    </q-page>
  </div>
</template>
<script setup lang="ts">
import Products from '@/views/home/components/products/Products.vue'
import ProductFilter from '@/views/home/components/products/ProductFilter.vue'
</script>