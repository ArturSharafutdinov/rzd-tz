<template>
  <div class="flex column">
    <span class="text-weight-bold">{{ label }}</span>
    <q-input
      v-model="price"
      :label="$t('input.price.label')"
      outlined
    />
  </div>
</template>

<script setup lang="ts">

const price = defineModel<number>()

defineProps({
  label: String
})

</script>