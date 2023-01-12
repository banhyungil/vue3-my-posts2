<template>
  <div>
    <PostWrite @complete="onComplete" @cancel="onCancel" />
  </div>
</template>

<script setup lang="ts">
import { PostFetcher } from "@/api/posts";
import type { Post } from "@/types";
import PostWrite from "@/components/PostWrite.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function onComplete(post: Post) {
  post.author = "ban";
  PostFetcher.insert(post);
  goHome();
}

function onCancel() {
  goHome();
}

function goHome() {
  router.push("/");
}
</script>

<style scoped></style>
