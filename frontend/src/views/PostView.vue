<template>
  <div class="mx-3 my-2">
    <header class="flex flex-row justify-center">
      <h1>{{ post.title }}</h1>
    </header>
    <hr />
    <main class="my-5 min-h-[50px]">
      <p>{{ post.content }}</p>
    </main>
    <hr />
    <div class="flex justify-between my-2">
      <div class="move-page-cont">
        <input
          type="button"
          @click="onPrevClicked"
          value="이전"
          :disabled="isPrevDisabled"
          class="btn-normal"
        />
        <input
          type="button"
          @click="onNextClicked"
          value="다음"
          :disabled="isNextDisabled"
          class="btn-normal"
        />
      </div>
      <div>
        <input
          type="button"
          @click="onListClicked"
          value="목록"
          class="btn-normal"
        />
        <input
          type="button"
          @click="onUpdateClicked"
          value="수정"
          class="btn-normal"
        />
        <input
          type="button"
          @click="onRemoveClicked"
          value="삭제"
          class="btn-normal"
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
const post = ref(await fetchPost(Number(id)));

const maxPost = (await PostFetcher.fetchMax()) as Post;

const isPrevDisabled = computed(() => {
  return post.value.id - 1 == 0;
});
const isNextDisabled = computed(() => {
  return post.value.id + 1 > maxPost.id;
});

async function onPrevClicked() {
  const prevId = post.value.id - 1;
  post.value = await fetchPost(prevId);
}

async function onNextClicked() {
  const nextId = post.value.id + 1;
  const nextPost = await fetchPost(nextId);
  post.value = nextPost;
}

function onListClicked() {
  router.push("/");
}

async function fetchPost(id: number) {
  const post = await PostFetcher.fetch(id);
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

<style scoped lang="postcss"></style>
