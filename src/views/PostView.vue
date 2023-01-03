<template>
  <div>
    <header class="flex flex-row justify-center">
      <h1 class="text-2xl">{{ post.title }}</h1>
    </header>
    <hr />
    <main>
      <p>{{ post.content }}</p>
    </main>
    <div class="flex justify-between">
      <div class="move-page-cont">
        <input
          type="button"
          @click="onPrevClicked"
          value="이전"
          :disabled="isPrevDisabled"
          :class="{ disable: isPrevDisabled }"
          class="btn"
        />
        <input
          type="button"
          @click="onNextClicked"
          value="다음"
          :disabled="isNextDisabled"
          :class="{ disable: isNextDisabled }"
          class="btn"
        />
      </div>
      <div>
        <h1>안녕</h1>
        <input type="button" @click="onListClicked" value="목록" class="btn" />
        <input
          type="button"
          @click="onUpdateClicked"
          value="수정"
          class="btn"
        />
        <input
          type="button"
          @click="onRemoveClicked"
          value="삭제"
          class="btn"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostFetcher } from "@/api/posts";
import type { Post } from "@/types";
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const id = route.params.id as string;
const post = ref(fetchPost(Number(id)));

const maxPost = PostFetcher.fetchMax() as Post;

const isPrevDisabled = computed(() => {
  return post.value.id - 1 == 0;
});
const isNextDisabled = computed(() => {
  return post.value.id + 1 > maxPost.id;
});

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

function onRemoveClicked() {
  PostFetcher.remove(post.value.id);
  router.push("/");
}
</script>

<style scoped></style>
