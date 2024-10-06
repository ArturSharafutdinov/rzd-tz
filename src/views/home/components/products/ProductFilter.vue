<template>
  <q-drawer
    v-model="drawer"
    class="bg-white filter"
    bordered
    :width="500"
    style="position: relative; z-index: 0"
  >
    <q-btn class="absolute-top-left q-ma-sm" icon="mdi-arrow-left" flat style="z-index: 1" @click="drawer = false" />
    <q-card class="shadow-0">
      <q-card-section class="text-h5 text-center q-pb-none">
        {{ $t('filter.title') }}
      </q-card-section>
      <q-card-section class="q-pb-none">
        <div class="text-h6 q-py-sm"> {{ $t('filter.category') }}</div>
        <category-input v-model="filter.category" />
      </q-card-section>
      <q-card-section class="q-pt-none q-pb-none">
        <div class="text-h6 q-py-sm"> {{ $t('filter.price') }}</div>
        <price-input
          v-model:min-price.number="filter.price.min"
          v-model:max-price.number="filter.price.max"
          @validation="(v) => validated = v"
        />
      </q-card-section>
      <q-card-actions vertical>
        <q-btn class="q-mx-sm q-my-sm" @click="productStore.clearFilter()">{{ $t('btn.clear') }}</q-btn>
        <q-btn :disable="!validated" color="primary" class="q-mx-sm" @click="productStore.applyFilter()">{{ $t('btn.apply') }}</q-btn>
      </q-card-actions>
    </q-card>
  </q-drawer>
  <q-btn v-if="!drawer" class="absolute-top-left open-filter-btn" flat icon="mdi-arrow-right"
         @click="drawer = true" />
</template>
<script setup lang="ts">
import PriceInput from '@/components/inputs/price/PriceInput.vue'
import CategoryInput from '@/components/inputs/category/CategoryInput.vue'
import { ref } from 'vue'
import { useProductStore } from '@/stores/product.store'
import { storeToRefs } from 'pinia'

const drawer = ref(true)
const validated = ref(true)

const productStore = useProductStore()

const { filter } = storeToRefs(productStore)

</script>

<style scoped lang="scss">

.open-filter-btn {
  margin-top: 90px;
  z-index: 1
}

</style>