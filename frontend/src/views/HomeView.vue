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
import { usePostsStore } from "@/stores/posts";
import { onMounted, ref } from "vue";

const postsStore = usePostsStore();
const posts = ref(postsStore.posts);

onMounted(async () => {
  posts.value = await postsStore.fetchAll();
});
</script>

<style scoped>
.gr-post {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
</style>
