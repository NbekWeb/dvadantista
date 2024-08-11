<script setup>
import { defineProps } from "vue";

const props = defineProps({
  date: {
    type: String,
  },
  price: {
    type: String,
  },
  img: {
    type: String,
  },
  title: {
    type: String,
  },
  term: {
    type: String,
  },
});
</script>
<template>
  <div class="bg-dark max-w-140 uppercase font-bold w-half">
    <div class="flex justify-between p-5 group hover:cursor-pointer">
      <p
        class="rounded-2xl bg-white p-2 text-sm text-blue group-hover:text-blue/80"
      >
        {{ date }}
      </p>
      <p class="text-orange text-2xl">{{ price }}</p>
    </div>
    <img :src="img" alt="" class="h-52 w-full object-cover" />
    <div class="text-xl p-5">
      <p class="text-white">{{ title }}</p>
      <p class="text-light-blue">{{ term }}</p>
    </div>
  </div>
</template>
<style></style>
