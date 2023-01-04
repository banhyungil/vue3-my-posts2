<script setup lang="ts">
import MyMenu from "./components/MyMenu.vue";
</script>

<template>
  <div>
    <nav class="gr bg-blue-600">
      <MyMenu></MyMenu>
      <input type="button" value="글쓰기" class="btn-write" />
    </nav>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped>
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
}

.btn-write:hover {
  background-color: #f8f9fa;
  color: #000;
}
</style>
