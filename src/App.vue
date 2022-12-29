<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <h1>Main</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped></style>
