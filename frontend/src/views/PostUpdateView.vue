<template>
  <div>
    <PostWrite
      v-if="post"
      :post="post"
      @complete="onComplete"
      @cancel="onCancel"
    />
  </div>
</template>

<script setup lang="ts">
import { PostFetcher } from "@/api/posts";
import type { Post } from "@/types";
import { ref, onMounted } from "vue";
import PostWrite from "@/components/PostWrite.vue";
import { useRoute, useRouter } from "vue-router";

const post = ref({} as Post);
const router = useRouter();
const route = useRoute();

onMounted(async () => {
  const id = route.params.id as string;
  post.value = await fetchPost(Number(id));
});

async function onComplete(newPost: Post) {
  await PostFetcher.update(newPost);
  router.push(`/post/${newPost.id}`);
}

function onCancel() {
  router.push(`/post/${post.value.id}`);
}

async function fetchPost(id: number) {
  const post = await PostFetcher.fetch(id);
  if (post == null) {
    router.push("/");
  }

  return post as Post;
}
</script>

<style scoped></style>
