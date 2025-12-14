<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import IntroCard from './components/ui/IntroCard.vue'

const showIntro = ref(true)

const handleEnterSite = () => {
  showIntro.value = false
}

const handleBackToIntro = () => {
  showIntro.value = true
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Intro Card -->
    <Transition name="fade-out">
      <IntroCard v-if="showIntro" @enter="handleEnterSite" />
    </Transition>

    <!-- Main Site Content -->
    <Transition name="fade-in">
      <div v-if="!showIntro" class="flex-1 flex flex-col">
        <TheHeader @back-to-intro="handleBackToIntro" />
        <router-view />
        <TheFooter />
      </div>
    </Transition>
  </div>
</template>

<style>
.fade-out-enter-active,
.fade-out-leave-active {
  transition: opacity 0.5s ease;
}

.fade-out-enter-from,
.fade-out-leave-to {
  opacity: 0;
}

.fade-in-enter-active {
  transition: opacity 0.5s ease 0.3s;
}

.fade-in-enter-from {
  opacity: 0;
}
</style>
