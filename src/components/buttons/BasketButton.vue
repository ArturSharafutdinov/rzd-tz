<template>
  <div class="relative-position flex column justify-center items-center">
    <q-btn
      flat
      size="lg"
      v-bind="$attrs"
    >
      <template #default>
        <div class="relative-position flex column justify-center items-center q-px-md">
          <q-icon name="mdi-basket" size="md" />
          <span class="basket-size__label">
            {{ label }}
          </span>

          <span v-if="basketSize > 0" class="absolute-top-right basket-size__size">
            {{ basketSize }}
          </span>
        </div>
      </template>
    </q-btn>
  </div>
</template>
<script setup lang="ts">

import { i18n } from '@/locale/i18n'
import { useBasketStore } from '@/stores/basket.store'
import { computed } from 'vue'

defineProps({
  label: {
    type: String,
    required: false,
    default: i18n.global.t('btn.basket')
  }
})

const basketStore = useBasketStore()

const basketSize = computed<number>(() => basketStore.basketSize)

</script>

<style scoped lang="scss">

@import '@/styles/quasar-variables.scss';

.basket-size {
  font-size: 16px;
  background-color: black;
  color: white;
  width: 35px;
  border-radius: 5px;

  &__label {
    font-size: 14px;
    font-family: Arial, sans-serif;
  }

  &__size {
    right: -5px;
    top: -5px;
    font-size: 14px;
    font-weight: bold;
    background-color: $red-6;
    padding: 2px 10px;
    border-radius: 5px;
  }
}


::v-deep(.q-btn) {
  line-height: normal;
  text-transform: none;
}

</style>