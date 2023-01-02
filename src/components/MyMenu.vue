<template>
  <div class="">
    ><RouterLink to="/" active-class="active">HOME</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
.active {
  color: #ffffff;
  font-size: 20px;
}

a:hover {
  color: #000;
}
</style>
