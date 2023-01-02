<template>
  <div>
    <header>
      <h1>{{ post.title }}</h1>
    </header>
    <hr />
    <body>
      <p>{{ post.content }}</p>
      <textarea>안녕</textarea>
    </body>
    <div>
      <input
        type="button"
        @click="onPrevClicked"
        value="이전"
        :disabled="post.id - 1 == 0"
      />
      <input
        type="button"
        @click="onNextClicked"
        value="다음"
        :disabled="isNextDisabled"
      />
      <input type="button" @click="onListClicked" value="목록" />
      <input type="button" @click="onUpdateClicked" value="수정" />
      <input type="button" @click="onRemoveClicked" value="삭제" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostFetcher } from "@/api/posts";
import router from "@/router";
import type { Post } from "@/types";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id as string;
const post = ref(fetchPost(Number(id)));

const maxPost = PostFetcher.fetchMax() as Post;
const isNextDisabled = post.value.id + 1 > maxPost.id;

function onPrevClicked() {
  const prevId = post.value.id - 1;
  post.value = fetchPost(prevId);
}

function onNextClicked() {
  const nextId = post.value.id + 1;
  const nextPost = fetchPost(nextId);
  post.value = nextPost;
}

function onListClicked() {
  router.push("/");
}

function fetchPost(id: number) {
  const post = PostFetcher.fetch(id);
  if (post == null) router.push("/");

  return post as Post;
}

function onUpdateClicked() {
  router.push(`/post/${post.value.id}/update`);
}

function onRemoveClicked() {}
</script>

<style scoped></style>
