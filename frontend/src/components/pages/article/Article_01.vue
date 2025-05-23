<template>
   <WriteArticleIcon @click="goArticle3" class="absolute bottom-20 right-2 cursor-pointer" />
   <!-- 상단 바 -->
   <div class="relative flex items-center justify-center w-full mt-16">
      <LeftArrow class="absolute top-1/2 -translate-y-1/2 left-10 cursor-pointer" />
      <h3 class="h3 font-bold">게시글</h3>
      <SearchIcon @click = "goArticle1_2" class="absolute top-1/2 -translate-1/2 right-10 cursor-pointer" />
   </div>
   <div class="w-full ps-6 pt-7 flex gap-4">
      <h3 class="h3 fw-black cursor-pointer">최신글</h3>
      <h3 class="h3 fw-black cursor-pointer">인기글</h3>
   </div>

   <!-- 게시글 -->
   <div class="mt-9 w-full max-h-full overflow-y-auto pb-6 scrollbar-hide">
      <div v-for="article in articles" :key="article.article_id" @click = "goDetail_article(article.article_id)" 
       class="ps-6 pe-4 w-full border-t border-b border-gray-600 cursor-pointer">
         <div class="flex items-center justify-between my-5">
            <div>
               <h3 class="h3">{{ article.title }}</h3>
               <h6 class="h6 w-50"> {{ article.content_preview }}</h6>
            </div>
            <p class="caption font-bold">{{ article.time_ago }} | {{ article.author }} </p>
         </div>
         <div class="w-full flex gap-5 items-center justify-center my-4">
            <div class="flex gap-2">
               <LikeIcon />
               <h5 class="h5">{{ article.likes_count }}</h5>
            </div>
            <div class="flex gap-2">
               <CommentIcon />
               <h5 class="h5">{{ article.total_comments }}</h5>
            </div>
         </div>
      </div>
   </div>


</template>

<script setup lang="ts">

import WriteArticleIcon from '@/components/common/icons/WriteArticleIcon.vue'
import LeftArrow from '@/components/common/icons/LeftArrow.vue';
import SearchIcon from '@/components/common/icons/SearchIcon.vue';
import CommentIcon from '@/components/common/icons/CommentIcon.vue';
import LikeIcon from '@/components/common/icons/LikeIcon.vue';
import ScrapIcon from '@/components/common/icons/ScrapIcon.vue';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router'
import useArticleComposable from '@/composables/useArticle';
const router = useRouter()
const articles = ref([])
const useArticle = useArticleComposable()

onMounted(async () => {
   const data = await useArticle.getArticleList({})
   articles.value = data.articles
})

const goArticle3 = () => {
   router.push({ name: 'create_article' })
}
const goArticle1_2 = () => {
   router.push({ name: 'article_search'})
}

const goDetail_article = (articleId) => {
   router.push({ name: 'detail_article', params:{id:articleId}})
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