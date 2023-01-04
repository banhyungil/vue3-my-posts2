<template>
  <div>
    <header>
      <input
        type="text"
        v-model="newPost.title"
        class="input-text w-full my-2"
      />
    </header>
    <hr />
    <main>
      <textarea
        v-model="newPost.content"
        class="text-area w-full h-[100px]"
      ></textarea>
    </main>
    <div class="flex justify-end">
      <input
        type="button"
        @click="onComplete"
        value="완료"
        class="btn-normal"
      />
      <input type="button" @click="onCancel" value="취소" class="btn-normal" />
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
