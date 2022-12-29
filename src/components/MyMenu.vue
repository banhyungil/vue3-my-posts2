<template>
  <div class="">
    <template v-for="route in routes" :key="route.path"
      ><RouterLink :to="route.path" active-class="active">{{
        route.name
      }}</RouterLink></template
    >
  </div>
</template>

<script setup lang="ts">
import { routes } from "@/router";
import { RouterLink } from "vue-router";
</script>

<style scoped>
.active {
  color: #ffffff;
  font-size: 20px;
}
</style>
