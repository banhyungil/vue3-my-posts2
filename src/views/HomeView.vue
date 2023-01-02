<template>
  <div class="fr"><h1>게시글 목록</h1></div>
  <hr />
  <div class="gr-post">
    <template v-for="post in posts" :key="post.id">
      <MyPostItem :post="post"></MyPostItem>
    </template>
  </div>
</template>

<script setup lang="ts">
import MyPostItem from "@/components/MyPostItem.vue";
import type { Post } from "@/types";
import { ref, type Ref } from "vue";
import { format } from "date-fns";

const posts: Ref<Post[]> = ref([]);

for (let i = 1; i < 11; ++i) {
  const obj = {
    id: i,
    title: i + "제목",
    content: i + "내용. 반갑습니다.",
    date: format(new Date(), "yyyy/MM/dd"),
    author: i + "half",
  };

  posts.value.push(obj);
}

localStorage.setItem("posts", JSON.stringify(posts.value));
</script>

<style scoped>
.gr-post {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
</style>
