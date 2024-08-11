<script setup>
import { defineProps } from "vue";

const props = defineProps({
  color: {
    type: String,
  },
  title: {
    type: String,
  },
  num: {
    type: String,
  },
});
</script>
<template>
  <div
    class="rounded-full flex items-center flex-col justify-center border-4 w-70 h-70"
    :class="
      color == 'green'
        ? 'border-green'
        : color == 'red'
        ? 'border-red'
        : color == 'blue'
        ? 'border-light-blue'
        : 'border-black'
    "
  >
    <p class="mb-8 text-6xl">{{ num }}</p>
    <p class="px-5 text-sm text-center">{{ title }}</p>
  </div>
</template>
<style scoped></style>
