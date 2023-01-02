<template>
  <div>
    <header>
      <input type="text" v-model="newPost.title" class="text-ellipsis" />
    </header>
    <hr />
    <body>
      <textarea v-model="newPost.content"></textarea>
    </body>
    <div>
      <input type="button" @click="onComplete" value="완료" />
      <input type="button" @click="onCancel" value="취소" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostFetcher } from "@/api/posts";
import type { Post } from "@/types";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const id = route.params.id as string;
const post = ref(fetchPost(Number(id)));
const newPost = ref({ ...post.value });

function onComplete() {
  PostFetcher.save(newPost.value);
  router.push(`/post/${post.value.id}`);
}

function onCancel() {
  router.push(`/post/${post.value.id}`);
}

function fetchPost(id: number) {
  const post = PostFetcher.fetch(id);
  if (post == null) router.push("/");

  return post as Post;
}
</script>

<style scoped></style>
