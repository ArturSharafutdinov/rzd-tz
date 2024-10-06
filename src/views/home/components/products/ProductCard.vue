<template>
  <q-card class="product-card">
    <q-card-section>
      <q-img
        height="300px"
        fit="contain"
        :src="product.image"
      >
        <div class="product-card__price absolute-bottom-right text-center bg-primary q-pa-xs">
          {{ product.price }}$
        </div>
      </q-img>
    </q-card-section>
    <q-separator />
    <q-card-section class="text-h6">
      {{ product.title }}
    </q-card-section>
    <q-space />
    <q-btn
      class="absolute-bottom-right q-mr-md q-mb-md"
      @click="emit('addProduct', product)"
    >
      {{ $t('btn.addToBasket') }}
    </q-btn>
    <div class="absolute-bottom-left q-ml-md q-mb-md text-grey-7">
      {{ productCategory }}
    </div>
  </q-card>
</template>

<script setup lang="ts">

import { computed, type PropType } from 'vue'
import type { Product } from '@/model/product'
import { i18n } from '@/locale/i18n'

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: false,
    default: undefined
  }
})

const emit = defineEmits([
  'addProduct'
])

// @ts-ignore
const productCategory = computed<string>(() => i18n.global.t(`categories.${ props.product?.category.replaceAll('\'', '') }`))

</script>

<style scoped lang="scss">

.product-card {

  height: 500px;

  &__price {
    border-radius: 10px;
    padding: 10px
  }
}

</style>