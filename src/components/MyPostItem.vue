<template>
  <div class="fr">
    <p class="post-title" @click="onTitleClicked">{{ post.title }}</p>
    <small class="post-author">{{ `${post.date}, ${post.author}` }}</small>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import type { Post } from "@/types";
import type { PropType } from "vue";

const props = defineProps({
  post: { type: Object as PropType<Post>, required: true },
});

function onTitleClicked() {
  router.push(`/post/${props.post.id}`);
}
</script>

<style scoped>
.fr {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  border: 1px solid #ddd;
}

.post-title {
  padding: 10px;
  background-color: #76af7c;
  color: white;

  width: 100%;
  text-align: center;
  cursor: pointer;
}
.post-title:hover {
  color: #000;
  font-weight: bold;
}

.post-author {
  color: #ddd;
  font-weight: bold;
  text-align: right;
  width: 100%;
}
</style>
