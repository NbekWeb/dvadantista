<template>
  <div
    class="fixed bottom-30 right-20 bg-green text-white p-5 rounded-full z-20 text-3xl shadow transition duration-300"
  >
    <IconPhone :class="showFirstIcon ? '' : 'hidden'" />
    <IconMsg :class="showFirstIcon ? 'hidden' : ''" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconMsg from "@/components/icons/IconMsg.vue";

const showFirstIcon = ref(true);

const toggleIcons = () => {
  showFirstIcon.value = !showFirstIcon.value;
};

let intervalId;

onMounted(() => {
  intervalId = setInterval(toggleIcons, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
<style scoped>
.shadow {
  box-shadow: rgba(63, 104, 74, 0.7) 0 0 10px;
}
</style>
