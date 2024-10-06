<template>
  <q-dialog v-model="openDialog">
    <q-card>
      <q-card-section class="text-h5 bg-primary text-white">
        {{ $t('basket.order.success') }}
      </q-card-section>
      <q-card-actions class="bg-primary text-white" align="right">
        <q-btn color="warning" @click="emit('closeDialog')">{{ $t('btn.close') }}</q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">

const emit = defineEmits([ 'closeDialog' ])

const openDialog = defineModel<boolean>()

</script>