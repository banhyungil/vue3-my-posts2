<script setup lang="ts">
import { useRouter } from "vue-router";
import MyMenu from "./components/MyMenu.vue";

const router = useRouter();
function write() {
  router.push("/post/write");
}
</script>

<template>
  <div>
    <nav class="bg-blue-600 gr">
      <MyMenu></MyMenu>
      <input type="button" value="글쓰기" @click="write" class="btn-write" />
    </nav>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style lang="postcss" scoped>
.gr {
  display: grid;
  grid-template-columns: calc(100% - 100px) 100px;
  padding: 10px;
}

.btn-write {
  color: #f8f9fa;
  font-weight: bold;
  font-size: 15px;

  background-color: #0d6efd;
  border: 1px solid #f8f9fa;

  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
    color: #000;
  }
}
</style>
