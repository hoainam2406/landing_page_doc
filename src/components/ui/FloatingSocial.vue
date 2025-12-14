<script setup lang="ts">
const emit = defineEmits(['backToIntro'])

const socialLinks = [
  {
    name: 'Zalo',
    href: 'https://zalo.me/',
    color: 'from-blue-400 to-blue-600',
    hoverColor: 'hover:from-blue-500 hover:to-blue-700',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 14.063c-.206.438-.682.876-1.12 1.02-.438.145-2.52.73-4.894-1.458-2.812-2.595-3.354-5.156-3.354-5.156s-.125-.5.188-.75c.312-.25.687-.25.687-.25s.438-.02.625.188c.188.208.625 1.02.625 1.02s.312.563.188.813c-.125.25-.375.5-.5.625-.125.125-.25.312-.125.562.125.25.625 1.063 1.375 1.75.938.875 1.75 1.187 2 1.312.25.125.438.063.625-.125.188-.188.438-.5.688-.75.188-.188.438-.25.625-.125.188.125 1.188.563 1.375.688.188.125.312.188.375.312.063.125.063.5-.144.938z"/>
    </svg>`,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/',
    color: 'from-blue-500 to-blue-700',
    hoverColor: 'hover:from-blue-600 hover:to-blue-800',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>`,
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/',
    color: 'from-gray-800 to-black',
    hoverColor: 'hover:from-gray-700 hover:to-gray-900',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
    </svg>`,
  },
]

const handleInfoClick = () => {
  emit('backToIntro')
}
</script>

<template>
  <div>
    <!-- Social buttons - right bottom -->
    <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        v-for="social in socialLinks"
        :key="social.name"
        :href="social.href"
        target="_blank"
        rel="noopener noreferrer"
        :class="[
          'group relative w-14 h-14 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white',
          'transition-all duration-300 ease-out',
          'hover:scale-110 hover:rotate-6',
          'shadow-lg hover:shadow-2xl',
          'bg-gradient-to-br',
          social.color,
          social.hoverColor
        ]"
        :title="social.name"
      >
        <!-- Pulse effect -->
        <span class="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></span>
        
        <!-- Icon -->
        <span v-html="social.icon" class="relative z-10"></span>
        
        <!-- Tooltip -->
        <span class="absolute right-full mr-3 px-3 py-1.5 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg">
          {{ social.name }}
          <!-- Arrow -->
          <span class="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></span>
        </span>
      </a>
    </div>

    <!-- Info button - left bottom -->
    <button
      @click="handleInfoClick"
      class="fixed bottom-4 left-4 z-50 group relative w-14 h-14 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all duration-300 ease-out hover:scale-110 shadow-lg hover:shadow-2xl"
      title="Thông tin"
    >
      <!-- Pulse effect -->
      <span class="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></span>
      
      <!-- Icon -->
      <svg class="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      
      <!-- Tooltip -->
      <span class="absolute left-full ml-3 px-3 py-1.5 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg">
        Thông tin
        <!-- Arrow -->
        <span class="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></span>
      </span>
    </button>
  </div>
</template>

<style scoped>
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
