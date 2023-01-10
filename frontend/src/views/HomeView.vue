<template>
  <div class="fr-center"><h1>게시글 목록</h1></div>
  <hr />
  <div class="gr-post">
    <template v-for="post in posts" :key="post.id">
      <PostItem :post="post"></PostItem>
    </template>
  </div>
</template>

<script setup lang="ts">
import PostItem from "@/components/PostItem.vue";
import type { Post } from "@/types";
import { onMounted, ref } from "vue";
import { PostFetcher } from "@/api/posts";

const posts = ref([] as Post[]);
onMounted(async () => {
  posts.value = await PostFetcher.fetchAll();
  console.log("posts", posts.value);
});
</script>

<style scoped>
.gr-post {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
</style>
