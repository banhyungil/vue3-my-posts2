<template>
  <div>
    <MyPagination :total-count="10" :page-size="5" :page-group-size="3" />
  </div>
</template>

<script setup lang="ts">
import MyPagination from "@/components/MyPagination.vue";
import { useRouter } from "vue-router";
</script>

<style scoped></style>
