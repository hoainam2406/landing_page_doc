<script setup lang="ts">
import SectionTitle from '../ui/SectionTitle.vue'

const expertises = [
  {
    icon: 'Histogram',
    title: 'Điều trị Vẹo Cột Sống',
    description: 'Chẩn đoán và điều trị các dạng vẹo cột sống ở trẻ em, thanh thiếu niên và người lớn bằng phương pháp bảo tồn',
    color: 'from-medical-500 to-medical-600',
  },
  {
    icon: 'Medal',
    title: 'Phục hồi Chức năng',
    description: 'Hỗ trợ phục hồi vận động sau chấn thương, phẫu thuật cơ xương khớp, giúp bạn sớm trở lại cuộc sống bình thường',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: 'UserFilled',
    title: 'Vật lý Trị liệu Cá nhân hóa',
    description: 'Thiết kế chương trình tập luyện và điều trị riêng biệt, phù hợp với tình trạng và mục tiêu của từng bệnh nhân',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: 'FirstAidKit',
    title: 'Điều trị Đau Lưng, Cổ vai gáy',
    description: 'Giải quyết các vấn đề đau mãn tính vùng thắt lưng, cổ vai gáy do tư thế làm việc, thoái hóa đốt sống',
    color: 'from-amber-500 to-amber-600',
  },
]
</script>

<template>
  <section id="expertise" class="section-padding">
    <div class="section-container">
      <SectionTitle 
        title="Chuyên Môn & Thế Mạnh"
        subtitle="Những lĩnh vực tôi có thể hỗ trợ bạn"
      />

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <el-card
          v-for="(item, index) in expertises"
          :key="item.title"
          class="card-hover !rounded-2xl overflow-hidden !border-0 shadow-md hover:shadow-xl"
          shadow="never"
        >
          <template #header>
            <div :class="['bg-gradient-to-r p-6 -m-5 mb-4', item.color]">
              <div class="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <el-icon class="text-3xl text-white">
                  <component :is="item.icon" />
                </el-icon>
              </div>
            </div>
          </template>

          <div class="space-y-3">
            <span class="inline-block px-2 py-0.5 bg-medical-100 text-medical-700 text-xs rounded-full">
              0{{ index + 1 }}
            </span>
            <h3 class="text-lg font-semibold text-slate-800">
              {{ item.title }}
            </h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </el-card>
      </div>

      <!-- Additional info -->
      <div class="mt-12 text-center">
        <p class="text-slate-600 max-w-2xl mx-auto">
          Mỗi bệnh nhân đều được tôi lắng nghe và thăm khám kỹ lưỡng 
          để đưa ra phác đồ điều trị phù hợp nhất với tình trạng của họ.
        </p>
      </div>
    </div>
  </section>
</template>
