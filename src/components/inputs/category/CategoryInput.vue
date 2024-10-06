<template>
  <div>
    <div class="text-weight-bold q-py-sm">
      {{ $t('input.category.label') }}
    </div>
    <q-select
      v-model="model"
      :options="categories"
      :option-label="option => $t(`categories.${option.replaceAll('\'', '')}`)"
      outlined
      emit-value
    />
  </div>
</template>

<script setup lang="ts">

import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/product.store'

const model = defineModel()

const productStore = useProductStore()
productStore.getAllCategories();

const { categories } = storeToRefs(productStore)

</script>