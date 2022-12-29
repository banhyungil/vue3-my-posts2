<template>
  <div class="gr-post">
    <template v-for="post in posts" :key="post.id">
      <MyPost :post="post"></MyPost>
    </template>
  </div>
</template>

<script setup lang="ts">
import MyPost from "@/components/MyPost.vue";
import type { Post } from "@/types";
import { ref, type Ref } from "vue";

const posts: Ref<Post[]> = ref([]);

for (let i = 1; i < 11; ++i) {
  const obj = {
    id: i,
    title: i + "제목",
    content: i + "내용. 반갑습니다.",
    author: i + "half",
  };

  posts.value.push(obj);
}
</script>

<style scoped>
.gr-post {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
</style>
