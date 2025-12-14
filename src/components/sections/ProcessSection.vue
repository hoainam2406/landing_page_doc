<script setup lang="ts">
import SectionTitle from '../ui/SectionTitle.vue'

const steps = [
  {
    number: 1,
    icon: 'Search',
    title: 'Thăm khám',
    description: 'Lắng nghe kỹ lưỡng các triệu chứng và tìm hiểu lịch sử bệnh lý của bạn',
  },
  {
    number: 2,
    icon: 'Document',
    title: 'Đánh giá',
    description: 'Kiểm tra chức năng, đo đạc chính xác và chẩn đoán tình trạng hiện tại',
  },
  {
    number: 3,
    icon: 'EditPen',
    title: 'Lập phác đồ',
    description: 'Xây dựng kế hoạch điều trị chi tiết, phù hợp với mục tiêu của bạn',
  },
  {
    number: 4,
    icon: 'Refresh',
    title: 'Theo dõi & Điều chỉnh',
    description: 'Đồng hành và liên tục tối ưu phác đồ theo tiến triển điều trị',
  },
]
</script>

<template>
  <section id="process" class="section-padding bg-medical-600">
    <div class="section-container">
      <SectionTitle 
        title="Quy Trình Điều Trị"
        subtitle="Hành trình chữa lành của bạn được đồng hành cẩn thận qua từng bước"
        :light="true"
      />

      <!-- Desktop Timeline -->
      <div class="hidden md:block">
        <div class="relative">
          <!-- Connecting line -->
          <div class="absolute top-12 left-0 right-0 h-1 bg-medical-400/50">
            <div class="absolute inset-0 bg-gradient-to-r from-white/50 via-white/80 to-white/50"></div>
          </div>

          <div class="grid grid-cols-4 gap-6 relative">
            <div 
              v-for="step in steps" 
              :key="step.number"
              class="relative"
            >
              <!-- Step circle -->
              <div class="flex justify-center mb-6">
                <div class="relative">
                  <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl z-10 relative">
                    <div class="text-center">
                      <el-icon class="text-3xl text-medical-600 mb-1">
                        <component :is="step.icon" />
                      </el-icon>
                      <span class="text-sm font-bold text-medical-600">0{{ step.number }}</span>
                    </div>
                  </div>
                  <!-- Pulse effect -->
                  <div class="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                </div>
              </div>

              <!-- Content -->
              <div class="text-center">
                <h3 class="text-xl font-semibold text-white mb-3">
                  {{ step.title }}
                </h3>
                <p class="text-medical-100 text-sm leading-relaxed">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Timeline (Vertical) -->
      <div class="md:hidden">
        <div class="relative pl-8">
          <!-- Vertical line -->
          <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-medical-400/50"></div>

          <div class="space-y-8">
            <div 
              v-for="step in steps" 
              :key="step.number"
              class="relative flex gap-6"
            >
              <!-- Step circle -->
              <div class="absolute left-0 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                <span class="text-sm font-bold text-medical-600">{{ step.number }}</span>
              </div>

              <!-- Content card -->
              <div class="flex-1 bg-white/10 backdrop-blur rounded-xl p-4 ml-4">
                <div class="flex items-center gap-3 mb-2">
                  <el-icon class="text-2xl text-white">
                    <component :is="step.icon" />
                  </el-icon>
                  <h3 class="text-lg font-semibold text-white">
                    {{ step.title }}
                  </h3>
                </div>
                <p class="text-medical-100 text-sm">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 text-center">
        <el-button 
          size="large"
          class="!bg-white !text-medical-600 !border-white hover:!bg-medical-50 !px-8"
        >
          <el-icon class="mr-2"><Calendar /></el-icon>
          Đặt lịch thăm khám
        </el-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes ping {
  75%, 100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
