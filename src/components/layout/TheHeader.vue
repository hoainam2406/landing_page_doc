<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { label: 'Về Tôi', href: '#about' },
  { label: 'Bằng Cấp', href: '#qualifications' },
  { label: 'Chuyên Môn', href: '#expertise' },
  { label: 'Liên Hệ', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const scrollToSection = (href: string) => {
  isMobileMenuOpen.value = false
  router.push(href)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled || isMobileMenuOpen
        ? 'glass-effect shadow-md py-3' 
        : 'bg-transparent py-4'
    ]"
  >
    <div class="section-container">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a 
          href="#" 
          @click.prevent="scrollToTop"
          class="flex items-center gap-3 group"
        >
          <div class="w-10 h-10 rounded-full bg-medical-600 flex items-center justify-center">
            <el-icon class="text-white text-xl">
              <FirstAidKit />
            </el-icon>
          </div>
          <div class="hidden sm:block">
            <h1 class="text-lg font-display font-semibold text-slate-800 group-hover:text-medical-600 transition-colors">
              BS. Cao Thị Thùy
            </h1>
            <p class="text-xs text-slate-500">Vật lý Trị liệu</p>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            @click.prevent="scrollToSection(item.href)"
            class="text-slate-600 hover:text-medical-600 font-medium transition-colors relative group"
          >
            {{ item.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <el-icon class="text-2xl text-slate-700">
            <component :is="isMobileMenuOpen ? 'Close' : 'Menu'" />
          </el-icon>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="slide-down">
        <nav
          v-if="isMobileMenuOpen"
          class="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4 bg-white/95 backdrop-blur-md rounded-b-lg"
        >
          <div class="flex flex-col gap-3">
            <a
              v-for="item in navItems"
              :key="item.href"
              :href="item.href"
              @click.prevent="scrollToSection(item.href)"
              class="text-slate-600 hover:text-medical-600 font-medium py-2 transition-colors"
            >
              {{ item.label }}
            </a>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
