<template>
  <div>
    <PostWrite @complete="onComplete" @cancel="onCancel" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import { PostFetcher } from "@/api/posts";
import type { Post } from "@/types";
import PostWrite from "@/components/PostWrite.vue";
import { usePostsStore } from "@/stores/posts";

const router = useRouter();
const postStore = usePostsStore();

async function onComplete(post: Post) {
  post.author = "ban";
  await PostFetcher.insert(post);

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
