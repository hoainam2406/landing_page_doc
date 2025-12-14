<script setup lang="ts">
</script>

<template>
  <section 
    id="hero" 
    class="relative min-h-screen md:min-h-screen flex items-center pt-16 md:pt-24 pb-16 md:pb-20 overflow-hidden"
  >
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img 
        src="/images/hero-bg.png" 
        alt="" 
        class="w-full h-full object-cover"
      />
      <!-- Overlay for better text readability -->
      <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
    </div>

    <div class="section-container relative z-10">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- Avatar Section -->
        <div class="flex justify-center md:order-1 order-2">
          <div class="relative">
            <!-- Animated gradient ring -->
            <div class="absolute -inset-3 bg-gradient-to-br from-medical-400 via-medical-500 to-medical-600 rounded-full blur-md opacity-75 animate-pulse"></div>
            
            <!-- Outer ring -->
            <div class="absolute -inset-1 bg-gradient-to-br from-medical-300 to-medical-600 rounded-full"></div>
            
            <!-- Avatar container -->
            <div class="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/images/doctor-avatar.png" 
                alt="BS. Cao Thị Thùy - Bác sĩ Vật lý Trị liệu" 
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Verified badge -->
            <div class="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 md:p-2 shadow-lg">
              <div class="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-medical-500 to-medical-600 rounded-full flex items-center justify-center">
                <el-icon class="text-lg md:text-2xl text-white">
                  <Check />
                </el-icon>
              </div>
            </div>
            
            <!-- Decoration dots -->
            <div class="absolute -top-4 -left-4 w-6 h-6 md:w-8 md:h-8 bg-medical-400 rounded-full opacity-60"></div>
            <div class="absolute top-6 md:top-8 -right-4 md:-right-6 w-3 h-3 md:w-4 md:h-4 bg-medical-300 rounded-full opacity-80"></div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="md:order-2 order-1 text-center md:text-left">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-medical-100 text-medical-700 rounded-full text-sm font-medium mb-4 md:mb-6">
            <el-icon><Star /></el-icon>
            <span>Chuyên gia Vẹo Cột Sống</span>
          </div>

          <h1 class="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-slate-800 mb-3 md:mb-4 leading-tight">
            BS. Cao Thị Thùy
          </h1>

          <h2 class="text-lg md:text-xl lg:text-2xl text-slate-600 font-medium mb-4 md:mb-6">
            Bác sĩ Vật lý Trị liệu <br class="hidden md:block">
            <span class="text-medical-600">Chuyên gia Cơ Xương Khớp</span>
          </h2>

          <p class="text-base md:text-lg text-slate-500 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            <span class="text-medical-600 font-medium italic">"Nâng niu từng đốt sống,</span><br>
            <span class="italic">đồng hành cùng bạn trên hành trình phục hồi"</span>
          </p>

          <!-- Quick stats -->
          <div class="grid grid-cols-3 gap-3 md:gap-6 mt-10 md:mt-12 pt-6 md:pt-8 border-t border-slate-200/50">
            <div class="text-center md:text-left">
              <p class="text-2xl md:text-4xl font-bold bg-gradient-to-r from-medical-600 to-medical-500 bg-clip-text text-transparent">10+</p>
              <p class="text-xs md:text-sm text-slate-500 mt-1">Năm<br class="md:hidden"> kinh nghiệm</p>
            </div>
            <div class="text-center md:text-left">
              <p class="text-2xl md:text-4xl font-bold bg-gradient-to-r from-medical-600 to-medical-500 bg-clip-text text-transparent">1000+</p>
              <p class="text-xs md:text-sm text-slate-500 mt-1">Bệnh nhân<br class="md:hidden"> tin tưởng</p>
            </div>
            <div class="text-center md:text-left">
              <p class="text-2xl md:text-4xl font-bold bg-gradient-to-r from-medical-600 to-medical-500 bg-clip-text text-transparent">100%</p>
              <p class="text-xs md:text-sm text-slate-500 mt-1">Tận tâm</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex">
      <div class="flex flex-col items-center gap-2 animate-bounce">
        <span class="text-xs text-slate-400 uppercase tracking-wider">Khám phá</span>
        <el-icon class="text-2xl text-medical-400">
          <ArrowDown />
        </el-icon>
      </div>
    </div>
    
    <!-- Gradient fade to next section -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none"></div>
  </section>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 0.75;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
