<template>

  <!-- Top bar -->
  <section class="w-full">
    <div class="flex gap-5 mt-15 items-center justify-end">
      <CloseIcon class="me-11 cursor-pointer" @click='goHome1' />
    </div>
  </section>

  <section class="w-full ps-6">
    <!-- 프로필 부분 -->
    <div class="flex justify-between items-center mt-10">
      <div class="flex gap-3 items-center">
        <ProfileIcon />
        <div>
          <h3 class="h3 fw-black">금쪼기님은</h3>
          <h4 class="h4"><span class="h4 fw-black text-gray-600">Silver</span> 등급입니다.</h4>
        </div>
      </div>

      <button @click="goChangeProfilePicuter"
        class="cursor-pointer w-30 h-7 border-gray-600 border-solid border-2 rounded-2xl h4 text-center me-9"> 프로필 변경
      </button>
    </div>

    <!-- 경험치 progress bar -->
    <div class="w-100 h-max-110 mx-auto mt-15">
      <!-- 전체 막대기 -->
      <div class="relative w-100 bg-gray-300 rounded-full h-4 mb-1">
        <!-- 누적 경험치 -->
        <div class="bg-gray-600 h-4 rounded-full" style="width: 40%;" id="progress-bar">
          <!-- 말풍선 -->
           <!-- left 값은 누적 경험치 바의 width값과 동일하게 해야 함 -->
          <div class="absolute left-40 -translate-x-1/2 -top-10">
            <div class="bg-gray-600 text-gray-100 h4 px-3 py-1 rounded-md relative">
              30,000
              <div class="w-3 h-3 bg-gray-600 rotate-45 left-1/2 absolute -translate-x-1/2 -bottom-1.5"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 하단 텍스트 -->
      <div class="flex justify-between text-caption fw-bold mt-1">
        <span class="caption fw-bold">0</span>
        <span class="caption fw-bold">100,000</span>
      </div>
    </div>


    <!-- 경험치 안내창 -->
    <div class="w-100 h-11 bg-gray-300 rounded-xl mb-8 mt-3 flex items-center justify-center">
      <h4 class="h4 fw-black text-center text-brown-600">골드 등급 <span class=" h4 text-cocoa-600">달성까지</span> 60,000 경험치
        남음
      </h4>
    </div>
  </section>


  <section class='w-full ps-7'>
    <!-- 전체 메뉴 -->
    <h4 class="h4 fw-black mb-6 text-gray-600"> 전체 메뉴</h4>
    <div>
      <div class="flex gap-4 items-center mb-7">
        <ExpenseIcon color='cocoa-600' />
        <p class="p1 cursor-pointer"> 소비 내역 조회</p>
      </div>
      <div class="flex gap-4 items-center mb-7">
        <RewardIcon />
        <p class="p1 cursor-pointer"> 리워드 교환</p>
      </div>
      <div @click = "goChallenge1" class="flex gap-4 items-center mb-7">
        <ChallengeIcon color='cocoa-600' />
        <p class="p1 cursor-pointer"> 챌린지 도전</p>
      </div>
      <div class="flex gap-4 items-center mb-7">
        <ArticleIcon color='cocoa-600' />
        <p class="p1 cursor-pointer"> 게시글 작성</p>
      </div>
    </div>

    <!-- 마이페이지 -->
    <h4 class="h4 fw-black mb-6 text-gray-600 mt-10"> 마이페이지</h4>
    <div>
      <div class="flex gap-4 items-center mb-7" @click='goHome3'>
        <UserInfoUpdateIcon />
        <p class="p1 cursor-pointer"> 회원정보 수정</p>
      </div>
      <div class="flex gap-4 items-center mb-7" @click='goHome4'>
        <PasswordChangeIcon />
        <p class="p1 cursor-pointer"> 비밀번호 변경</p>
      </div>
    </div>
  </section>
  <ProfileChangeModal v-if="showModal" @close="showModal = false" />




</template>

<script setup>
import ChallengeIcon from '@/components/common/icons/ChallengeIcon.vue';
import ExpenseIcon from '@/components/common/icons/ExpenseIcon.vue';
import ProfileIcon from '@/components/common/icons/ProfileIcon.vue';
import ArticleIcon from '@/components/common/icons/ArticleIcon.vue';
import RewardIcon from '@/components/common/icons/RewardIcon.vue';
import UserInfoUpdateIcon from '@/components/common/icons/UserInfoUpdateIcon.vue';
import PasswordChangeIcon from '@/components/common/icons/PasswordChangeIcon.vue';
import CloseIcon from '@/components/common/icons/CloseIcon.vue';
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import ProfileChangeModal from '@/components/modal/ProfileChangeModal.vue'
const showModal = ref(false)

const router = useRouter()

const goHome1 = () => {
  router.push({ name: 'home' })
}
const goHome3 = () => {
  router.push({ name: 'home3' })
}
const goHome4 = () => {
  router.push({ name: 'home4' })
}
const goChangeProfilePicuter = () => {
  showModal.value = true
}
const goChallenge1 = () => {
  router.push({ name: 'challenge' })
}

</script>

<style scoped>

</style>
