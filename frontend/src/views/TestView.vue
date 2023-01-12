<template>
  <div>
    <h1>테스트요</h1>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

router.push({
  name: "Test2",
  params: { prop1: "hi" },
});
</script>

<style scoped></style>
