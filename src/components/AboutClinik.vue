<template>
  <div class="flex bg-black text-white justify-between">
    <div class="flex h-110 pt-15 relative">
      <img
        src="https://dvadantista.ru/assets/cache_image/images/lykyanenko_grey_0x0_6fe.webP"
        class="z-10 h-full w-auto object-cover"
      />
      <div class="flex flex-col items-center absolute z-20 top-1/2 left-5 mt-5">
        <p
          class="px-3 py-2 bg-white/70 rounded mb-5 text-dark font-bold"
          :class="doc1 ? 'opacity-100' : 'opacity-0'"
        >
          Лукьяненко Артур Викторович
        </p>

        <div
          class="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center"
          @mouseenter="showDoc('doc1')"
          @mouseleave="showDoc('doc1')"
        >
          <div class="w-6 h-6 bg-green rounded-full"></div>
        </div>
      </div>
      <img
        src="https://dvadantista.ru/assets/cache_image/images/kubus_grey_0x0_6fe.webP"
        class="-mx-24 h-full w-auto object-cover"
      />
      <div
        class="flex flex-col items-center absolute z-20 top-1/2 -right-15 mt-5"
      >
        <p
          class="px-3 py-2 bg-white/70 rounded mb-5 text-dark font-bold"
          :class="doc2 ? 'opacity-100' : 'opacity-0'"
        >
          Лукьяненко Артур Викторович
        </p>

        <div
          class="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center"
          @mouseenter="showDoc('doc2')"
          @mouseleave="showDoc('doc2')"
        >
          <div class="w-6 h-6 bg-green rounded-full"></div>
        </div>
      </div>
    </div>
    <div class="w-1/2 flex flex-col justify-center pr-15">
      <h2 class="text-3xl font-bold mb-10 mr-40">
        Стоматологическая клиника «Два Дантиста»
      </h2>
      <p class="text-sm mb-10">
        Мы открыли клинику “Два Дантиста” в 2020 году и с тех пор ежедневно
        помогаем своим пациентам обрести здоровые и красивые зубы. Как
        практикующие специалисты, мы понимаем что необходимо организовать в
        клинике, поэтому оборудуем ее по последним тенденциям стоматологии,
        чтобы идти в ногу со временем. Наша миссия - повышать качество жизни
        людей, и этим пропитано все: наш подход при планировании лечения,
        комфорт проводимых услуг, сервис внутри клиники и после проведенных
        процедур. Как доктора, мы отвечаем за каждую работу и полностью
        погружаемся во все клинические случаи наших пациентов.
      </p>
      <button
        class="py-2 bg-green hover:bg-green/80 text-base font-semibold w-60 rounded"
      >
        Подробнее о клинике
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const doc1 = ref(false);
const doc2 = ref(false);

const showDoc = (doc) => {
  if (doc == "doc1") {
    doc1.value = !doc1.value;
  } else {
    doc2.value = !doc2.value;
  }
};
</script>
