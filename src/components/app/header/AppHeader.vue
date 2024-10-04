<template>
  <q-header class="app-header">
    <q-toolbar class="full-height">

      <q-toolbar-title class="app-header__title cursor-pointer q-py-md" @click="goHome">
        <q-avatar>
          <q-icon name="mdi-train" size="lg" />
        </q-avatar>
        {{ title }}
      </q-toolbar-title>

      <q-space />

      <bucket-button class="full-height q-py-xs" :to="ROUTE_PATH.BASKET" />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ROUTE_PATH } from '@/router'
import { useRouter } from 'vue-router'
import BucketButton from '@/components/app/buttons/BucketButton.vue'

const title = import.meta.env.VITE_APP_TITLE

const router = useRouter()

const goHome = () => {
  router.push(ROUTE_PATH.HOME)
}

</script>

<style scoped lang="scss">

@import '@/styles/quasar-variables.scss';

.app-header {
  height: 80px;

  &__title {
    border-radius: 5px;
  }

  &__title:hover {
    background-color: rgba($secondary, 0.5);
  }
}

::v-deep(.q-toolbar__title) {
  flex: none;
}

</style>