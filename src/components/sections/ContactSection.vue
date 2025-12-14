<script setup lang="ts">
import SectionTitle from '../ui/SectionTitle.vue'

const contactInfo = [
  {
    icon: 'Phone',
    label: 'Điện thoại',
    value: '0xxx.xxx.xxx',
    href: 'tel:0xxxxxxxxx',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: 'Message',
    label: 'Email',
    value: 'bs.caothithuy@email.com',
    href: 'mailto:bs.caothithuy@email.com',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: 'Location',
    label: 'Địa chỉ',
    value: 'Hà Nội',
    href: null,
    color: 'bg-red-50 text-red-600',
  },
]
</script>

<template>
  <section id="contact" class="section-padding bg-slate-50">
    <div class="section-container">
      <SectionTitle 
        title="Thông Tin Liên Hệ"
        subtitle="Kết nối với tôi"
      />

      <div class="max-w-2xl mx-auto">
        <!-- Contact cards grid -->
        <div class="grid sm:grid-cols-3 gap-6">
          <a
            v-for="item in contactInfo"
            :key="item.label"
            :href="item.href || 'javascript:void(0)'"
            :class="[
              'bg-white rounded-2xl p-6 shadow-md transition-all duration-300 text-center',
              item.href ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : 'cursor-default'
            ]"
          >
            <div class="flex flex-col items-center gap-3">
              <div :class="['w-14 h-14 rounded-xl flex items-center justify-center', item.color]">
                <el-icon class="text-2xl">
                  <component :is="item.icon" />
                </el-icon>
              </div>
              <div>
                <p class="text-sm text-slate-500 mb-1">{{ item.label }}</p>
                <p class="font-semibold text-slate-800 text-sm">{{ item.value }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
