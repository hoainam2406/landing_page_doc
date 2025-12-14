<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: 'Về Tôi', href: '#about' },
  { label: 'Bằng Cấp', href: '#qualifications' },
  { label: 'Chuyên Môn', href: '#expertise' },
  { label: 'Liên Hệ', href: '#contact' },
]

const scrollToSection = (href: string) => {
  router.push(href)
}
</script>

<template>
  <footer class="bg-slate-900 text-white">
    <div class="section-container py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-medical-600 flex items-center justify-center">
              <el-icon class="text-white text-xl">
                <FirstAidKit />
              </el-icon>
            </div>
            <div>
              <h3 class="text-lg font-display font-semibold">BS. Hoài Nam</h3>
              <p class="text-sm text-slate-400">Bác sĩ Vật lý Trị liệu</p>
            </div>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed">
            Chuyên điều trị vẹo cột sống và các vấn đề cơ xương khớp bằng phương pháp bảo tồn, an toàn và hiệu quả.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4 text-medical-400">Liên kết nhanh</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.href">
              <a
                :href="link.href"
                @click.prevent="scrollToSection(link.href)"
                class="text-slate-400 hover:text-white transition-colors text-sm"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-semibold mb-4 text-medical-400">Liên hệ</h4>
          <ul class="space-y-3">
            <li class="flex items-center gap-2 text-slate-400 text-sm">
              <el-icon class="text-medical-500"><Phone /></el-icon>
              <a href="tel:0xxx.xxx.xxx" class="hover:text-white transition-colors">
                0xxx.xxx.xxx
              </a>
            </li>
            <li class="flex items-center gap-2 text-slate-400 text-sm">
              <el-icon class="text-medical-500"><Message /></el-icon>
              <a href="mailto:bs.caothithuy@email.com" class="hover:text-white transition-colors">
                bs.caothithuy@email.com
              </a>
            </li>
            <li class="flex items-start gap-2 text-slate-400 text-sm">
              <el-icon class="text-medical-500 mt-0.5"><Location /></el-icon>
              <span>Hà Nội</span>
            </li>
          </ul>

          <!-- Social Links -->
          <div class="flex gap-3 mt-4">
            <a 
              href="#" 
              class="w-9 h-9 rounded-full bg-slate-800 hover:bg-medical-600 flex items-center justify-center transition-colors"
              title="Facebook"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="#" 
              class="w-9 h-9 rounded-full bg-slate-800 hover:bg-medical-600 flex items-center justify-center transition-colors"
              title="Zalo"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.024c-.118.354-.471.59-.943.59H7.05c-.472 0-.825-.236-.943-.59-.118-.354.059-.767.471-1.063l4.95-3.543c.177-.118.295-.295.295-.531V8.366c0-.236-.118-.413-.295-.531L6.578 4.293c-.412-.295-.59-.709-.471-1.063.118-.354.471-.59.943-.59h9.901c.472 0 .825.236.943.59.118.354-.059.767-.471 1.063l-4.95 3.543c-.177.118-.295.295-.295.531v3.521c0 .236.118.413.295.531l4.95 3.543c.412.295.59.709.471 1.063z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-slate-800 mt-8 pt-8">
        <p class="text-center text-slate-500 text-sm">
          © {{ currentYear }} BS. Hoài Nam. Tất cả các quyền được bảo lưu.
        </p>
      </div>
    </div>
  </footer>
</template>
