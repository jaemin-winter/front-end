<template>
  <main class="px-5 w-full py-16 overflow-hidden">

    <!-- <button @click="testLogout">테스트 로그아웃</button> -->
    <header class="w-full flex justify-between items-center mb-5">
      <div class="flex items-center gap-2">
        <back-icon color="black"></back-icon>
        <span class="h3">챌린지</span>
      </div>
      <div class="w-30 bg-gold-200 py-1 px-2.5 rounded-full flex justify-between items-center">
        <img :src="StarImg" alt="⭐" class="w-6 h-6">
        <div>
          1200P
        </div>
      </div>
    </header>

    <section class="flex flex-col gap-5 mb-8">
      <div class="flex justify-between items-center h4 fw-black text-gray-600">
        <div>
          진행중인 챌린지
        </div>
        <div @click="router.push({name : 'challenge_before'})">
          지난 챌린지 &gt;
        </div>
      </div>
      <swiper :slides-per-view="3" :space-between="100" :loop="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :effect="'fade'" :grab-cursor="true" :centered-slides="true" class="w-md">
        <swiper-slide v-for="item in [1, 2, 3, 4, 5]" :key="item">
          <div class="px-5 py-4.5 bg-gold-100 rounded-4xl flex flex-col min-w-43 h4 text-cocoa-600">
            <div class="fw-black">음식</div>
            <div>배달비 5만원 줄이기</div>
            <div class="fw-black">300 P</div>
            <div class="caption fw-bold text-gray-600">25.01.01-25.01.31</div>
          </div>
        </swiper-slide>
      </swiper>
    </section>

    <section class="bg-white rounded-4xl px-5 shadow-md relative">
      <div class="h4 text-gray-600 mb-2 sticky top-0 py-5 bg-white">도전 가능한 챌린지</div>
      <div class="h4 text-cocoa-600 flex flex-col gap-6 pb-20 h-[550px] scrollbar-hide overflow-y-scroll">
        <div v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]" :key="item"
          class="flex justify-between border-b-2 border-dashed border-gray-600 pb-1">
          <div class="flex flex-col items-center gap-2">
            <div class="w-15 h-15 bg-gold-100 rounded-full"></div>
            <div class="h4 fw-black">카테고리명</div>
          </div>
          <div class="flex flex-col gap-1 justify-center">
            <div class="h4">배달음식 5만원 줄이기</div>
            <div class="caption fw-bold text-gray-600">마감 3일전</div>
          </div>
          <div class="flex items-center justify-center py-1 px-2 bg-gold-100 rounded-full h-fit my-auto">
            <div>
              ⭐
            </div>
            <div class="h4">
              200P
            </div>
          </div>
        </div>
      </div>

    </section>
  </main>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import BackIcon from '@/components/common/icons/BackIcon.vue';
import StarImg from '@/assets/images/star.png'
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const router = useRouter()
const authStore = useAuthStore();

function testLogout() {
  authStore.logout();
}
</script>


<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>