<template>
  <div>
    <header>
      <input
        type="text"
        v-model="cpPost.title"
        class="w-full my-2 input-text"
      />
    </header>
    <hr />
    <main>
      <textarea
        v-model="cpPost.content"
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
import type { Post } from "@/types";
import { ref, watch } from "vue";

export interface Props {
  post?: Post;
}

const props = withDefaults(defineProps<Props>(), {
  post: () => {
    return {} as Post;
  },
});

const emit = defineEmits<{
  (e: "complete", post: Post): void;
  (e: "cancel"): void;
}>();

const cpPost = ref({} as Post);

// getter function 이용
watch(
  () => props.post,
  (newPost) => {
    cpPost.value = { ...newPost };
  }
);

function onComplete() {
  emit("complete", cpPost.value);
}

function onCancel() {
  emit("cancel");
}
</script>

<style scoped></style>
