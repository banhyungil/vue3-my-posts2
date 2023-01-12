<template>
  <div class="mx-3 my-2">
    <header class="flex flex-row justify-center">
      <h1>{{ cPost.title }}</h1>
    </header>
    <hr />
    <main class="my-5 min-h-[50px]">
      <p>{{ cPost.content }}</p>
    </main>
    <hr />
    <div class="flex justify-between my-2">
      <div class="move-page-cont">
        <input
          type="button"
          @click="onPrevClicked"
          value="이전"
          :disabled="cIsPrevDisabled"
          class="btn-normal"
        />
        <input
          type="button"
          @click="onNextClicked"
          value="다음"
          :disabled="cIsNextDisabled"
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
import { usePostsStore } from "@/stores/posts";
import { ref, computed, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const postsStore = usePostsStore();
const posts = postsStore.posts;

const curIdx = ref(0);

onBeforeMount(async () => {
  const id = Number(route.params.id);
  curIdx.value = posts.findIndex((post) => post.id == id);
});

const cPost = computed(() => posts[curIdx.value]);
const cIsNextDisabled = computed(() => curIdx.value >= posts.length - 1);
const cIsPrevDisabled = computed(() => curIdx.value <= 0);

async function onPrevClicked() {
  curIdx.value--;
  const id = cPost.value.id;
  router.push(`/post/${id}`);
}

async function onNextClicked() {
  curIdx.value++;
  const id = cPost.value.id;
  router.push(`/post/${id}`);
}

function onListClicked() {
  router.push("/");
}

function onUpdateClicked() {
  router.push(`/post/${cPost.value.id}/update`);
}

function onRemoveClicked() {
  PostFetcher.remove(cPost.value.id);
  router.push("/");
}
</script>

<style scoped lang="postcss"></style>
