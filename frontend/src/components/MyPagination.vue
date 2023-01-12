<template>
  <div>
    <input
      class="btn"
      type="button"
      value="<<"
      @click="prevGroup"
      :disabled="curPageGroup <= 1"
    />
    <input
      class="btn"
      type="button"
      value="<"
      @click="prev"
      :disabled="curPage <= 0"
    />
    <input
      type="button"
      class="page"
      v-for="page in cPages"
      :key="page"
      :value="page"
    />
    <input
      class="btn"
      type="button"
      value=">"
      @click="next"
      :disabled="curPage >= cTotalPage"
    />
    <input
      class="btn"
      type="button"
      value=">>"
      @click="nextGroup"
      :disabled="cTotalPage <= curPageGroup * pageGroupSize"
    />
  </div>
  <div>
    <p>{{ `${curPage} / ${cTotalPage}` }} page</p>
    <p>{{ `totalCount : ${totalCount}` }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const emit = defineEmits<{
  (e: "changePage", page: Number): void;
}>();

// 1) totalPage : totalCount / pageSize
const props = defineProps({
  totalCount: { type: Number, required: true },

  pageGroupSize: { type: Number, default: 5 },
  pageSize: { type: Number, default: 5 },
});

const cTotalPage = computed(() => Math.ceil(props.totalCount / props.pageSize));

const curPage = ref(1);
const curPageGroup = ref(1);

const cStPage = computed(() => {
  return (curPageGroup.value - 1) * props.pageGroupSize + 1;
});
const cPages = computed(() => {
  const arr = Array.from(
    Array(props.pageGroupSize).keys(),
    (page) => page + cStPage.value
  );
  return arr.filter((page) => page <= cTotalPage.value);
});

function prevGroup() {
  --curPageGroup.value;
  curPage.value = cStPage.value;

  emit("changePage", curPage.value);
}

function prev() {
  --curPage.value;

  emit("changePage", curPage.value);
}

function next() {
  ++curPage.value;

  emit("changePage", curPage.value);
}

function nextGroup() {
  ++curPageGroup.value;
  curPage.value = cStPage.value;

  emit("changePage", curPage.value);
}
</script>

<style scoped lang="postcss">
.page {
  @apply p-1 mx-1 cursor-pointer text-slate-500;
}
.page:hover {
  background-color: rgb(92, 143, 209);
  color: #fff;
}
.page.active {
  @apply font-bold;
}

.btn {
  @apply px-1 mx-1 cursor-pointer text-white font-bold;
  background-color: rgb(141, 231, 153);
}

.btn:disabled {
  @apply cursor-default;
  background-color: #ddd;
}
</style>
