<template>
  <div>
    <PostWrite :post="post" @complete="onComplete" @cancel="onCancel" />
  </div>
</template>

<script setup lang="ts">
import { PostFetcher } from "@/api/posts";
import type { Post } from "@/types";
import { ref, onMounted } from "vue";
import PostWrite from "@/components/PostWrite.vue";
import { useRoute, useRouter } from "vue-router";

onMounted(() => {});

const router = useRouter();
const route = useRoute();

const id = route.params.id as string;
const post = ref(await fetchPost(Number(id)));

function onComplete(post: Post) {
  PostFetcher.save(post);
  router.push(`/post/${post.id}`);
}

function onCancel() {
  router.push(`/post/${post.value.id}`);
}

async function fetchPost(id: number) {
  const post = await PostFetcher.fetch(id);
  if (post == null || post == undefined) {
    router.push("/");
  }

  return post as Post;
}
</script>

<style scoped></style>
