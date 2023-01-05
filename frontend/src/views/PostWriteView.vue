<template>
  <div>
    <PostWrite @complete="onComplete" @cancel="onCancel" />
  </div>
</template>

<script setup lang="ts">
import { PostFetcher } from "@/api/posts";
import type { Post } from "@/types";
import { onMounted } from "vue";
import PostWrite from "@/components/PostWrite.vue";
import { useRouter } from "vue-router";

onMounted(() => {});

const router = useRouter();

function onComplete(post: Post) {
  PostFetcher.save(post);
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
