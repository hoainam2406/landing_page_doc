<script setup lang="ts">
import SectionTitle from '../ui/SectionTitle.vue'

const philosophies = [
  {
    icon: 'Aim',
    title: 'Không phẫu thuật',
    description: 'Ưu tiên các phương pháp điều trị bảo tồn, an toàn và không xâm lấn',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    icon: 'User',
    title: 'Cá nhân hóa',
    description: 'Mỗi bệnh nhân là một cá thể riêng biệt, cần phác đồ điều trị riêng',
    color: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    icon: 'DataAnalysis',
    title: 'Dựa trên khoa học',
    description: 'Áp dụng những phương pháp đã được nghiên cứu và chứng minh hiệu quả',
    color: 'bg-green-50 text-green-600 border-green-100',
  },
]
</script>

<template>
  <section id="about" class="section-padding bg-slate-50" v-scroll-animate>
    <div class="section-container">
      <SectionTitle 
        title="Về Tôi" 
        subtitle="Tận tâm đồng hành cùng bạn trên hành trình phục hồi sức khỏe"
      />

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Image -->
        <div class="relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/doctor-working.png" 
              alt="BS. Hoài Nam đang điều trị cho bệnh nhân" 
              class="w-full aspect-[4/3] object-cover"
            />
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-medical-900/20 to-transparent"></div>
          </div>
          
          <!-- Experience badge - Hidden on mobile -->
          <div class="hidden md:block absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
            <div class="text-center">
              <p class="text-4xl font-bold text-medical-600">10+</p>
              <p class="text-sm text-slate-600 mt-1">Năm kinh nghiệm</p>
            </div>
          </div>
          
          <!-- Decorative element -->
          <div class="absolute -top-4 -left-4 w-24 h-24 bg-medical-100 rounded-2xl -z-10"></div>
        </div>

        <!-- Content -->
        <div>
          <h3 class="text-2xl md:text-3xl font-display font-semibold text-slate-800 mb-6">
            Xin chào, <br>
            <span class="text-medical-600">Tôi là BS. Hoài Nam</span>
          </h3>
          
          <div class="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Với niềm đam mê trong lĩnh vực vật lý trị liệu và phục hồi chức năng, 
              tôi đã dành nhiều năm nghiên cứu và thực hành các phương pháp điều trị 
              bảo tồn cho các vấn đề về cột sống và cơ xương khớp.
            </p>
            <p>
              Tôi tin rằng mỗi bệnh nhân đều xứng đáng được <strong class="text-slate-800">lắng nghe, thấu hiểu</strong> và 
              điều trị phù hợp với tình trạng riêng của họ. Đó là lý do tôi luôn đặt 
              <strong class="text-slate-800">sự an toàn và hiệu quả</strong> lên hàng đầu trong mọi phác đồ điều trị.
            </p>
          </div>

          <!-- Philosophy cards -->
          <div class="mt-10">
            <h4 class="font-semibold text-slate-800 mb-5 flex items-center gap-2">
              <span class="w-8 h-1 bg-medical-600 rounded-full"></span>
              Triết lý điều trị
            </h4>
            <div class="grid sm:grid-cols-3 gap-4">
              <div 
                v-for="item in philosophies" 
                :key="item.title"
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:-translate-y-1"
              >
                <div :class="['w-12 h-12 rounded-xl flex items-center justify-center mb-4 border', item.color]">
                  <el-icon class="text-2xl">
                    <component :is="item.icon" />
                  </el-icon>
                </div>
                <h5 class="font-semibold text-slate-800 mb-2">{{ item.title }}</h5>
                <p class="text-sm text-slate-500 leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
