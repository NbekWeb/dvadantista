<script setup>
import ServiceCard from "./ServiceCard.vue";

import { services } from "@/assets/var";
</script>

<template>
  <div class="px-15 uppercase font-bold">
    <div class="relative my-6">
      <h2 class="text-5xl text-light-gray">услуги</h2>
      <h3 class="absolute bottom-0 text-3xl text-black">
        Популярные услуги клиники
      </h3>
    </div>
    <div class="flex flex-wrap justify-between gap-y-4 mb-10">
      <service-card
        v-for="(service, i) of services"
        :key="i"
        :title="service.title"
        :color="service.color"
        :img="service.img"
      />
    </div>

    <button class="bg-green px-5 py-2 text-white rounded mb-10">Смотреть все услуги</button>
  </div>
</template>

<style scoped>
h2 {
  text-shadow: 1px 4px 3px rgba(0, 0, 0, 0.2);
}
</style>
