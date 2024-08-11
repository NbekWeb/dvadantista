<script setup>
import IconWhatsapp from "@/components/icons/IconWhatsapp.vue";
import IconTg from "@/components/icons/IconTg.vue";
import IconYt from "@/components/icons/IconYt.vue";
import IconVk from "@/components/icons/IconVk.vue";
import IconDizen from "@/components/icons/IconDizen.vue";

import IconSearch from "@/components/icons/IconSearch.vue";
</script>
<template>
  <div>
    <div
      class="items-center justify-between py-2 text-xl text-white max-lg:hidden bg-dark px-15 lg:flex"
    >
      <p class="">пн – вс: 8:00 - 22:00</p>
      <a href="#" class="text-xs underline text-blue"
        >Версия сайта для слабовидящих</a
      >
      <p class="text-xs">СПб, Московский проспект, 183/185 лит Б.</p>
      <div class="flex flex-col text-sm">
        <a class="" href="tel:+78125663401">+7 (812) 566-34-01</a>
        <a class="" href="tel:+79310020317">+7 (931) 002-03-17</a>
      </div>
      <a href="mailto:dwadantista@yandex.ru" class="text-xl"
        >dwadantista@yandex.ru
      </a>
    </div>
    <div class="px-15">
      <div class="flex items-center justify-between py-4">
        <img src="@/assets/img/logo.png" alt="logo" class="h-12" />

        <form class="flex items-center h-12 px-2 border border-light_gray">
          <input
            type="text"
            class="h-full outline-none w-60"
            placeholder="Поиск"
          />
          <button type="submit" class="text-2xl text-dark">
            <icon-search />
          </button>
        </form>
        <div class="flex gap-1 text-xl text-white">
          <button class="flex items-center justify-center w-10 h-10 bg-dark text-4xl">
            <icon-dizen />
          </button>
          <button class="flex items-center justify-center w-10 h-10 bg-dark">
            <icon-whatsapp />
          </button>
          <button class="flex items-center justify-center w-10 h-10 bg-dark">
            <icon-tg />
          </button>
          <button class="flex items-center justify-center w-10 h-10 bg-dark">
            <icon-vk />
          </button>
          <button class="flex items-center justify-center w-10 h-10 bg-dark">
            <icon-yt />
          </button>
        </div>
        <div class="gap-5 text-lg text-white xl:flex max-xl:hidden">
          <button class="h-12 px-5 bg-dark">Записаться на прием</button>
          <button class="h-12 px-5 bg-dark">Онлайн консультация</button>
        </div>
      </div>
      <div
        class="justify-between pb-4 text-lg text-white xl:hidden max-xl:flex"
      >
        <button class="h-12 px-5 bg-dark">Записаться на прием</button>
        <button class="h-12 px-5 bg-dark">Онлайн консультация</button>
      </div>
    </div>
  </div>
</template>
<style></style>
