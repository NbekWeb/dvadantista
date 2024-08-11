<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-10 right-10 bg-light-green text-white p-3 rounded-full z-20"
  >
    <icon-chevron-up />
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import IconChevronUp from "@/components/icons/IconChevronUp.vue";

const isVisible = ref(false);

const handleScroll = () => {
  const scrollY = window.scrollY || window.pageYOffset;
  isVisible.value = scrollY > window.innerHeight + 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
