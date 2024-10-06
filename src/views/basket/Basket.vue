<template>
  <q-page class="q-pa-md">
    <basket-table @complete-order="openOrderDialog =true" />
    <order-dialog v-model="openOrderDialog" @close-dialog="closeOrderDialog" />
  </q-page>
</template>
<script setup lang="ts">
import BasketTable from '@/views/basket/components/BasketTable.vue'
import { ref } from 'vue'
import OrderDialog from '@/views/basket/components/OrderDialog.vue'
import { useBasketStore } from '@/stores/basket.store'
import { useRouter } from 'vue-router'
import { ROUTE_PATH } from '@/router'

const router = useRouter()
const basketStore = useBasketStore()

const openOrderDialog = ref<boolean>(false)

const closeOrderDialog = () => {
  basketStore.clearBasket()
  openOrderDialog.value = false
  router.push(ROUTE_PATH.HOME)
}

</script>