<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

withDefaults(defineProps<Props>(), {
  centered: true,
  light: false,
})
</script>

<template>
  <div :class="['mb-12', centered ? 'text-center' : '']">
    <h2 
      :class="[
        'text-3xl md:text-4xl font-display font-bold mb-4',
        light ? 'text-white' : 'text-slate-800'
      ]"
    >
      {{ title }}
    </h2>
    <div 
      :class="[
        'w-20 h-1 rounded-full',
        centered ? 'mx-auto' : '',
        'bg-medical-600'
      ]"
    ></div>
    <p 
      v-if="subtitle"
      :class="[
        'mt-4 text-lg',
        light ? 'text-slate-300' : 'text-slate-600'
      ]"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
