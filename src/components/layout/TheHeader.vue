<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['backToIntro'])

const router = useRouter()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const headerRef = ref<HTMLElement | null>(null)

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

const handleInfoClick = () => {
  isMobileMenuOpen.value = false
  emit('backToIntro')
}

const toggleMobileMenu = (event: Event) => {
  event.stopPropagation()
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleClickOutside = (event: MouseEvent) => {
  if (!isMobileMenuOpen.value) return
  if (headerRef.value && !headerRef.value.contains(event.target as Node)) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>


<template>
  <header
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled || isMobileMenuOpen ? 'glass-effect shadow-md' : 'bg-transparent',
      isScrolled ? 'py-3' : 'py-4'
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
          <!-- Thông tin button -->
          <button
            @click="handleInfoClick"
            class="flex items-center gap-2 px-4 py-2 bg-medical-500 hover:bg-medical-600 text-white font-medium rounded-lg transition-colors"
          >
            <el-icon><InfoFilled /></el-icon>
            <span>Thông tin</span>
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          @click="toggleMobileMenu"
        >
          <el-icon class="text-2xl text-slate-700">
            <component :is="isMobileMenuOpen ? 'Close' : 'Menu'" />
          </el-icon>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation - Full Width -->
    <Transition name="slide-down">
      <nav
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md"
      >
        <div class="section-container py-4">
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
            
            <!-- Thông tin button mobile -->
            <button
              @click="handleInfoClick"
              class="flex items-center justify-center gap-2 w-full px-4 py-2 bg-medical-500 hover:bg-medical-600 text-white font-medium rounded-lg transition-colors mt-2"
            >
              <el-icon><InfoFilled /></el-icon>
              <span>Thông tin</span>
            </button>
          </div>
        </div>
      </nav>
    </Transition>
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
