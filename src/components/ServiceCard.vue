<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
  color: {
    type: String,
  },
  img: {
    type: String,
  },
});
</script>
<template>
  <div
    class="w-third h-65 relative flex items-center shadow bg-white text-white"
  >
    <p
      class="text-center py-1 w-full z-10"
      :class="
        color == 'blue'
          ? 'bg-light-blue'
          : (color == 'green' ? 'bg-green' : 'bg-orange')
      "
    >
      {{ title }}
    </p>
    <img :src="img" class="absolute top-10 right-5 h-44" />
  </div>
</template>
<style scoped>
.shadow {
  box-shadow: 0 4px 25px 0 #5f5f5f40;
}
</style>
