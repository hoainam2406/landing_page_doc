<script setup lang="ts">
const emit = defineEmits(['backToIntro'])

const socialLinks = [
  {
    name: 'Zalo',
    href: 'https://zalo.me/',
    color: 'from-[#0068FF] to-[#0052CC]',
    hoverColor: 'hover:from-[#0052CC] hover:to-[#003D99]',
    icon: `<svg viewBox="0 0 48 48" fill="currentColor" class="w-5 h-5">
      <path d="M24 4C12.96 4 4 12.96 4 24c0 9.72 6.96 17.76 16.08 19.44v-7.56c-2.4-.48-4.2-2.64-4.2-5.16 0-2.88 2.4-5.28 5.28-5.28.96 0 1.92.24 2.64.72l3.12-3.12c-.96-.72-2.16-1.2-3.6-1.2-1.2 0-2.4.24-3.36.72V18c0-3.36 2.64-6 6-6s6 2.64 6 6v4.56c-.96-.48-2.16-.72-3.36-.72-1.44 0-2.64.48-3.6 1.2l3.12 3.12c.72-.48 1.68-.72 2.64-.72 2.88 0 5.28 2.4 5.28 5.28 0 2.52-1.8 4.68-4.2 5.16v7.56C37.04 41.76 44 33.72 44 24c0-11.04-8.96-20-20-20z"/>
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
