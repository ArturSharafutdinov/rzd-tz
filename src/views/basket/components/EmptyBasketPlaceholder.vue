<template>
  <div class="absolute-center">
    <div class="text-center text-h5">
      {{ $t('basket.empty') }}
    </div>
    <div class="flex justify-center q-mt-sm">
      <q-btn @click="backHome">{{ $t('btn.backHome') }}</q-btn>
    </div>

  </div>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router'
import { ROUTE_PATH } from '@/router'

const router = useRouter()
const backHome = () => {
  router.push(ROUTE_PATH.HOME)
}

</script>