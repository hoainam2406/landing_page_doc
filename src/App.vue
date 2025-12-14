<script setup lang="ts">
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import FloatingSocial from './components/ui/FloatingSocial.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <router-view />
    <TheFooter />
    <FloatingSocial />
  </div>
</template>
