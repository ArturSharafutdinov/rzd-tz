<template>
  <q-header class="app-header">
    <q-toolbar class="full-height">

      <q-toolbar-title class="cursor-pointer" @click="goHome">
        <q-avatar>
          <q-icon name="mdi-train" size="lg"/>
        </q-avatar>
        {{ title }}
      </q-toolbar-title>

      <q-space />

      <q-btn :to="ROUTE_PATH.BASKET">Корзина</q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ROUTE_PATH } from '@/router'
import { useRouter } from 'vue-router'

const title = import.meta.env.VITE_APP_TITLE

const router = useRouter()

const goHome = () => {
  router.push(ROUTE_PATH.HOME)
}

</script>

<style scoped lang="scss">

.app-header {
  height: 70px
}

::v-deep(.q-toolbar__title) {
  flex: none;
}

</style>