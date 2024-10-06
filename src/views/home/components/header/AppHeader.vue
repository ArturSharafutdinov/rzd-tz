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

      <basket-button v-if="isAuthenticated" class="full-height q-py-xs" :to="ROUTE_PATH.BASKET" />
      <logout-button v-if="isAuthenticated" class="q-py-xs q-ml-md"/>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ROUTE_PATH } from '@/router'
import { useRouter } from 'vue-router'
import BasketButton from '@/components/buttons/BasketButton.vue'
import { useSecurityStore } from '@/stores/security.store'
import { computed } from 'vue'
import LogoutButton from '@/components/buttons/LogoutButton.vue'

const title = import.meta.env.VITE_APP_TITLE

const router = useRouter()

const goHome = () => {
  router.push(ROUTE_PATH.HOME)
}

const securityStore = useSecurityStore()
const isAuthenticated = computed<boolean>(() => securityStore.isAuthenticated)

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