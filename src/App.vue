<template>
  <q-layout view="hHh lpR fFf">
    <app-header />

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import AppHeader from '@/views/home/components/header/AppHeader.vue'
</script>