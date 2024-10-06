<template>
  <q-btn
    color="secondary"
    icon="mdi-logout"
    @click="securityStore.logout">
  </q-btn>
</template>

<script setup lang="ts">

import { useSecurityStore } from '@/stores/security.store'

const securityStore = useSecurityStore()

</script>