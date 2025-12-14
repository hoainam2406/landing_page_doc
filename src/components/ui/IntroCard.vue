<script setup lang="ts">
const emit = defineEmits(['enter'])

const handleEnter = () => {
  emit('enter')
}
</script>

<template>
  <div class="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50/50 via-cyan-50/30 to-blue-50/50">
    <!-- Soft medical pattern background -->
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 20px 20px, rgb(13, 148, 136) 1px, transparent 0); background-size: 40px 40px;"></div>
    
    <!-- Floating orbs - soft medical colors -->
    <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full blur-[100px] animate-float-slow"></div>
    <div class="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-[100px] animate-float-delayed"></div>
    <div class="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-[80px] animate-float-reverse"></div>
    
    <!-- Glass Card -->
    <div class="relative max-w-md mx-4 sm:mx-6 animate-fade-in-up">
      <!-- Outer glow -->
      <div class="absolute -inset-[1px] bg-gradient-to-br from-white/60 via-teal-100/40 to-cyan-100/40 rounded-[32px] blur-xl opacity-50"></div>
      
      <!-- Main Glass Card -->
      <div class="relative bg-white/40 backdrop-blur-2xl rounded-[30px] p-6 sm:p-10 md:p-12 border border-white/60 shadow-[0_8px_32px_rgba(13,148,136,0.1)]">
        <!-- Subtle gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-teal-50/30 rounded-[30px] pointer-events-none"></div>
        
        <!-- Content -->
        <div class="relative z-10">
          <!-- Avatar with soft glow -->
          <div class="flex justify-center mb-4">
            <div class="relative group">
              <!-- Soft pulsing glow -->
              <div class="absolute -inset-3 bg-gradient-to-br from-teal-300/40 via-cyan-300/30 to-blue-300/40 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse-glow"></div>
              
              <!-- Avatar ring -->
              <div class="relative">
                <!-- Multiple glass layers for depth -->
                <div class="absolute -inset-2 bg-white/40 backdrop-blur-sm rounded-full"></div>
                <div class="absolute -inset-1 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 rounded-full"></div>
                
                <div class="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/80 shadow-lg">
                  <img 
                    src="/images/doctor-avatar.png" 
                    alt="BS. Cao Thị Thùy" 
                    class="w-full h-full object-cover"
                  />
                </div>
                
                <!-- Verified badge - soft glass style -->
                <div class="absolute -bottom-0.5 -right-0.5 bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg ring-2 ring-white/60">
                  <div class="w-5 h-5 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="text-center space-y-2">
            <!-- Badge -->
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/60 backdrop-blur-sm text-teal-700 rounded-full text-[10px] font-medium border border-white/80 shadow-sm">
              <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>Chuyên gia Vẹo Cột Sống</span>
            </div>

            <!-- Name -->
            <h1 class="text-2xl sm:text-3xl font-display font-bold text-slate-800/90 tracking-tight">
              BS. Cao Thị Thùy
            </h1>

            <!-- Title -->
            <p class="text-sm text-slate-600/90 font-medium">
              Bác sĩ Vật lý Trị liệu
            </p>

            <!-- Soft divider -->
            <div class="flex items-center gap-2 justify-center py-2">
              <div class="h-px w-12 bg-gradient-to-r from-transparent via-teal-300/50 to-transparent"></div>
              <div class="w-1 h-1 rounded-full bg-teal-400/60"></div>
              <div class="h-px w-12 bg-gradient-to-l from-transparent via-teal-300/50 to-transparent"></div>
            </div>

            <!-- Stats - Compact -->
            <div class="flex items-center justify-center gap-4 py-1.5">
              <div class="text-center">
                <p class="text-lg font-bold bg-gradient-to-br from-teal-600 to-cyan-600 bg-clip-text text-transparent">10+</p>
                <p class="text-[9px] text-slate-500/80 mt-0.5 uppercase tracking-wider font-medium">Năm</p>
              </div>
              <div class="w-px h-8 bg-gradient-to-b from-transparent via-teal-300/40 to-transparent"></div>
              <div class="text-center">
                <p class="text-lg font-bold bg-gradient-to-br from-teal-600 to-cyan-600 bg-clip-text text-transparent">1000+</p>
                <p class="text-[9px] text-slate-500/80 mt-0.5 uppercase tracking-wider font-medium">Bệnh nhân</p>
              </div>
              <div class="w-px h-8 bg-gradient-to-b from-transparent via-teal-300/40 to-transparent"></div>
              <div class="text-center">
                <p class="text-lg font-bold bg-gradient-to-br from-teal-600 to-cyan-600 bg-clip-text text-transparent">100%</p>
                <p class="text-[9px] text-slate-500/80 mt-0.5 uppercase tracking-wider font-medium">Tận tâm</p>
              </div>
            </div>

            <!-- Soft divider -->
            <div class="flex items-center gap-3 justify-center py-3">
              <div class="h-px w-16 bg-gradient-to-r from-transparent via-teal-300/50 to-transparent"></div>
              <div class="w-1.5 h-1.5 rounded-full bg-teal-400/60"></div>
              <div class="h-px w-16 bg-gradient-to-l from-transparent via-teal-300/50 to-transparent"></div>
            </div>

            <!-- Contact Info - Compact Glass Cards -->
            <div class="space-y-1.5 text-xs pt-2">
              <!-- Phone -->
              <a href="tel:0xxxxxxxxx" class="group flex items-center justify-center gap-2 px-3 py-2 bg-white/40 hover:bg-white/60 backdrop-blur-sm text-slate-700 hover:text-teal-700 rounded-xl border border-white/60 transition-all duration-300">
                <svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span class="font-medium">0xxx.xxx.xxx</span>
              </a>

              <!-- Email -->
              <a href="mailto:bs.caothithuy@email.com" class="group flex items-center justify-center gap-2 px-3 py-2 bg-white/40 hover:bg-white/60 backdrop-blur-sm text-slate-700 hover:text-teal-700 rounded-xl border border-white/60 transition-all duration-300">
                <svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span class="font-medium truncate">bs.caothithuy@email.com</span>
              </a>

              <!-- Location -->
              <div class="flex items-center justify-center gap-2 px-3 py-2 bg-white/40 backdrop-blur-sm text-slate-700 rounded-xl border border-white/60">
                <svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="font-medium">Hà Nội</span>
              </div>
            </div>

            <!-- Compact Glass Button -->
            <div class="pt-3">
              <button
                @click="handleEnter"
                class="group relative inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-br from-teal-500/90 to-cyan-500/90 hover:from-teal-500 hover:to-cyan-500 text-white font-semibold text-xs rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 overflow-hidden"
              >
                <!-- Glass overlay -->
                <div class="absolute inset-0 bg-white/20"></div>
                
                <!-- Shimmer effect -->
                <span class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:animate-shimmer-fast"></span>
                
                <span class="relative">Xem chi tiết</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-15px, -15px) scale(1.05);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(18px, 18px) scale(1.08);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-12px, 12px) scale(1.06);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes shimmer-fast {
  0% {
    transform: translateX(-100%) skew(-12deg);
  }
  100% {
    transform: translateX(200%) skew(-12deg);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-float-slow {
  animation: float-slow 25s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 28s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 22s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 4s ease-in-out infinite;
}

.group:hover .animate-shimmer-fast {
  animation: shimmer-fast 0.8s ease-out;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up,
  .animate-float-slow,
  .animate-float-delayed,
  .animate-float-reverse,
  .animate-pulse-glow,
  .animate-shimmer-fast {
    animation: none;
  }
}
</style>
