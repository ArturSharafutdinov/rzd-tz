<template>
  <div class="q-pl-sm text-weight-bold">{{ label }}</div>
  <q-input
    v-model="model"
    v-bind="$attrs"
    :label="inputLabel"
    outlined
    class="q-ma-sm"
  />
</template>

<script setup lang="ts">

const model = defineModel()

defineProps({
  label: String,
  inputLabel: String
})

</script>