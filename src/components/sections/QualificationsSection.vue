<script setup lang="ts">
import SectionTitle from '../ui/SectionTitle.vue'

const qualifications = [
  {
    year: '2010',
    title: 'Bác sĩ Y khoa',
    institution: 'Đại học Y Dược TP. Hồ Chí Minh',
    icon: 'School',
  },
  {
    year: '2012',
    title: 'Chuyên khoa Vật lý Trị liệu',
    institution: 'Đại học Y Dược TP. Hồ Chí Minh',
    icon: 'Medal',
  },
  {
    year: '2015',
    title: 'Chứng chỉ Điều trị Vẹo Cột Sống',
    institution: 'Schroth Method - Đức',
    icon: 'Trophy',
  },
  {
    year: '2018',
    title: 'Chứng chỉ Phục hồi Chức năng Nâng cao',
    institution: 'Singapore General Hospital',
    icon: 'Stamp',
  },
]
</script>

<template>
  <section id="qualifications" class="section-padding" v-scroll-animate>
    <div class="section-container">
      <SectionTitle 
        title="Bằng Cấp & Chứng Chỉ"
        subtitle="Nền tảng học vấn và chuyên môn được đào tạo bài bản"
      />

      <div class="max-w-4xl mx-auto">
        <!-- Timeline -->
        <div class="relative">
          <!-- Vertical line -->
          <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-medical-200 md:-translate-x-0.5"></div>

          <div class="space-y-8">
            <div 
              v-for="(item, index) in qualifications" 
              :key="item.title"
              :class="[
                'relative flex items-start gap-6',
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              ]"
            >
              <!-- Timeline dot -->
              <div class="absolute left-8 md:left-1/2 w-4 h-4 bg-medical-600 rounded-full border-4 border-white shadow -translate-x-1/2 z-10"></div>

              <!-- Year badge (mobile hidden, desktop visible) -->
              <div 
                :class="[
                  'hidden md:flex w-1/2 items-center',
                  index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'
                ]"
              >
                <span class="px-4 py-1.5 bg-medical-100 text-medical-700 rounded-full font-semibold text-sm">
                  {{ item.year }}
                </span>
              </div>

              <!-- Content card -->
              <div 
                :class="[
                  'flex-1 ml-16 md:ml-0 md:w-1/2',
                  index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                ]"
              >
                <div class="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border border-slate-100">
                  <!-- Year badge (mobile visible) -->
                  <span class="md:hidden inline-block px-3 py-1 bg-medical-100 text-medical-700 rounded-full font-semibold text-xs mb-3">
                    {{ item.year }}
                  </span>
                  
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-medical-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <el-icon class="text-2xl text-medical-600">
                        <component :is="item.icon" />
                      </el-icon>
                    </div>
                    <div>
                      <h3 class="font-semibold text-slate-800 mb-1">{{ item.title }}</h3>
                      <p class="text-sm text-slate-500">{{ item.institution }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional certifications note -->
        <div class="mt-12 text-center">
          <p class="text-slate-500 text-sm">
            Và nhiều chứng chỉ đào tạo chuyên sâu khác trong lĩnh vực vật lý trị liệu
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
