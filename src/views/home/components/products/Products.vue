<template>
  <div class="text-h4 q-ml-xl">{{ currentCategory }}</div>
  <q-table
    :rows="products"
    :loading="isProductsLoading"
    :loading-label="$t('products.loading')"
    :rows-per-page-options="[0]"
    :no-data-label="$t('products.noData')"
    hide-pagination
    grid
    class="fit"
  >
    <template
      #item="props">
      <div class="q-pa-sm col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <product-card :product="props.row" @add-product="addProduct" />
      </div>
    </template>
  </q-table>
</template>

<script setup lang="ts">

import { useBasketStore } from '@/stores/basket.store'
import { NOTIFY_COLORS, useNotify } from '@/composables/useNotify'
import { computed } from 'vue'
import type { Product } from '@/model/product'
import { useProductStore } from '@/stores/product.store'
import ProductCard from '@/views/home/components/products/ProductCard.vue'
import { i18n } from '@/locale/i18n'

// Notify
const { addNotify } = useNotify()

// Products
const productStore = useProductStore()
productStore.getAllProducts()

const products = computed<Product[]>(() => productStore.products)
const isProductsLoading = computed<boolean>(() => productStore.isProductsLoading)

// @ts-ignore
const currentCategory = computed<string>(() => i18n.global.t(`categories.${ productStore.currentCategory.replaceAll('\'', '') }`))

// Basket
const basketStore = useBasketStore()

const addProduct = (product: Product) => {
  basketStore.addToBasket(product) ? addNotify(i18n.global.t('products.basketSuccess')) : addNotify(i18n.global.t('products.basketFail'), 'top', NOTIFY_COLORS.ERROR)
}

</script>