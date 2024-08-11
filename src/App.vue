<script setup>
import HeadTop from "@/components/HeadTop.vue";
import MenuList from "@/components/MenuList.vue";
import CardAksi from "@/components/CardAksi.vue";
import ClinikCard from "./components/ClinikCard.vue";
import RoundedCard from "./components/RoundedCard.vue";
import AboutClinik from "./components/AboutClinik.vue";
import ServiceClinik from "./components/ServiceClinik.vue";
import ScrollTop from "./components/ScrollTop.vue";
import Contact from "./components/Contact.vue";
</script>
<template>
  <div class="overflow-x-hidden">
    <head-top />
    <menu-list />
    <div class="px-15 mt-10 flex flex-col items-center">
      <div class="flex justify-center flex-wrap gap-x-10 gap-y-5">
        <card-aksi
          title="Рассрочка на брекет-систему "
          img="https://dvadantista.ru/uploads/Rectangle12372.png"
          term="0 % на 12 месяцев!"
          price="от 2 490 ₽ / мес."
          date="акция до 31 августа"
          v-for="i of 4"
          :key="i"
        />
      </div>
      <clinik-card class="w-full border mt-15" />
      <div class="flex justify-between w-full mb-10">
        <rounded-card
          title="
          наших пациентов имеют 
          стабильный результат 
          лечения за 5-10 лет
        "
          num="95%"
          color="green"
        />
        <rounded-card
          title="
				обучающих мероприятий
				проведено нашими докторами-
				экспертами
         в странах СНГ
			
        "
          num="500"
          color="black"
        />
        <rounded-card
          title="
          успешно установленных
керамических реставраций
за последние 5 лет
        "
          num="21000"
          color="blue"
        />
        <rounded-card
          title="
          наших пациентов — врачи,
потому, что нам доверяют
коллеги
        "
          num="30%"
          color="red"
        />
      </div>
    </div>
    <about-clinik />
    <service-clinik />
    <scroll-top />
    <contact />
  </div>
</template>
<style></style>
