<script setup lang="ts">
</script>

<template>
  <section 
    id="hero" 
    class="relative min-h-screen flex items-center pt-20 overflow-hidden"
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
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Avatar Section -->
        <div class="flex justify-center md:order-1 order-2">
          <div class="relative">
            <!-- Animated gradient ring -->
            <div class="absolute -inset-3 bg-gradient-to-br from-medical-400 via-medical-500 to-medical-600 rounded-full blur-md opacity-75 animate-pulse"></div>
            
            <!-- Outer ring -->
            <div class="absolute -inset-1 bg-gradient-to-br from-medical-300 to-medical-600 rounded-full"></div>
            
            <!-- Avatar container -->
            <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/images/doctor-avatar.png" 
                alt="BS. Cao Thị Thùy - Bác sĩ Vật lý Trị liệu" 
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Verified badge -->
            <div class="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
              <div class="w-14 h-14 bg-gradient-to-br from-medical-500 to-medical-600 rounded-full flex items-center justify-center">
                <el-icon class="text-2xl text-white">
                  <Check />
                </el-icon>
              </div>
            </div>
            
            <!-- Decoration dots -->
            <div class="absolute -top-4 -left-4 w-8 h-8 bg-medical-400 rounded-full opacity-60"></div>
            <div class="absolute top-8 -right-6 w-4 h-4 bg-medical-300 rounded-full opacity-80"></div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="md:order-2 order-1 text-center md:text-left">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-medical-100 text-medical-700 rounded-full text-sm font-medium mb-6">
            <el-icon><Star /></el-icon>
            <span>Chuyên gia Vẹo Cột Sống</span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-800 mb-4 leading-tight">
            BS. Cao Thị Thùy
          </h1>

          <h2 class="text-xl md:text-2xl text-slate-600 font-medium mb-6">
            Bác sĩ Vật lý Trị liệu <br class="hidden md:block">
            <span class="text-medical-600">Chuyên gia Cơ Xương Khớp</span>
          </h2>

          <p class="text-lg text-slate-500 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            <span class="text-medical-600 font-medium italic">"Nâng niu từng đốt sống,</span><br>
            <span class="italic">đồng hành cùng bạn trên hành trình phục hồi"</span>
          </p>

          <!-- Quick stats -->
          <div class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200/50">
            <div class="text-center md:text-left">
              <p class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-medical-600 to-medical-500 bg-clip-text text-transparent">10+</p>
              <p class="text-sm text-slate-500 mt-1">Năm kinh nghiệm</p>
            </div>
            <div class="text-center md:text-left">
              <p class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-medical-600 to-medical-500 bg-clip-text text-transparent">1000+</p>
              <p class="text-sm text-slate-500 mt-1">Bệnh nhân tin tưởng</p>
            </div>
            <div class="text-center md:text-left">
              <p class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-medical-600 to-medical-500 bg-clip-text text-transparent">100%</p>
              <p class="text-sm text-slate-500 mt-1">Tận tâm</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div class="flex flex-col items-center gap-2 animate-bounce">
        <span class="text-xs text-slate-400 uppercase tracking-wider">Khám phá</span>
        <el-icon class="text-2xl text-medical-400">
          <ArrowDown />
        </el-icon>
      </div>
    </div>
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
