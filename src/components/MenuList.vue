<script setup>
import { ref } from "vue";
import IconChevronUp from "./icons/IconChevronUp.vue";
import { useRouter } from "vue-router";
import { menuList } from "@/assets/var";

const router = useRouter();

const selectedMenu = ref(null);
const currentMenu = ref("");
const currentMenuShow = ref(0);
const parent = ref(null);

const showMenu = (menu, i = 0, title = "") => {
  selectedMenu.value = menu;
  if (title) {
    currentMenuShow.value += i;
  } else {
    currentMenuShow.value = 0;
    parent.value = null;
    currentMenu.value = "";
  }
  if (currentMenuShow.value > 0) {
    currentMenu.value = menu.title;
    parent.value = title;
  }
};

const hideMenu = () => {
  selectedMenu.value = null;
  parent.value = null;
  currentMenu.value = "";
  currentMenuShow.value = 0;
};

const goMenu = (key) => {
  router.push(`/${key}`);
  hideMenu();
};
</script>
<template>
  <div @mouseleave="hideMenu" class="relative">
    <div class="py-5 text-base text-white bg-green px-15 font-bold uppercase">
      <ul class="flex justify-between">
        <li
          v-for="(menu, i) in menuList"
          :key="i"
          @mouseenter="showMenu(menu)"
          class="flex items-center gap-2 hover:cursor-pointer py-1 px-3"
          :class="menu.type == 'warning' ? ' bg-red rounded-md' : ''"
        >
          <span @click="goMenu(menu.key)">
            {{ menu.title }}
          </span>
          <icon-chevron-up
            class="text-xs transition-transform duration-300"
            :class="
              selectedMenu?.key == menu?.key || parent?.key == menu?.key
                ? 'rotate-180 '
                : ''
            "
            v-if="menu.children.length"
            @click="showMenu(menu)"
          />
        </li>
      </ul>
    </div>
    <div
      class="absolute children_menu top-18 left-0 w-full"
      v-if="selectedMenu?.children?.length"
    >
      <div
        class="flex w-full h-full gap-40 pt-8 text-black bg-white shadow px-15"
      >
        <div v-if="parent">
          <button
            class="flex items-center gap-3 text-lg text-green"
            @click="showMenu(parent, -1)"
          >
            <icon-chevron-up class="text-xs -rotate-90" />
            <span>
              {{ parent.title }}
            </span>
          </button>
        </div>
        <div class="flex-grow">
          <div
            class="w-full p-4 border-2 text-xl flex justify-between text-green font-semibold mb-2 text-center"
            v-if="currentMenu"
          >
            <span>{{ currentMenu }}</span>
            <icon-chevron-up class="rotate-90 text-xs" />
          </div>
          <ul
            class="flex flex-wrap w-full gap-y-2 gap-x-4"
            :class="parent ? 'pl-4' : 'pl-0'"
          >
            <li
              class="flex items-center justify-between hover:cursor-pointer"
              :class="parent ? 'w-half' : 'w-four'"
              v-for="(menu, i) of selectedMenu.children"
              :key="i"
            >
              <span @click="goMenu(menu.key)" class="hover:text-light-blue">
                {{ menu.title }}
              </span>
              <icon-chevron-up
                class="text-xs rotate-90 hover:text-light-blue"
                v-if="menu?.children?.length"
                @click="showMenu(menu, 1, selectedMenu)"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.children_menu {
  height: calc(100vh - 200px);
}

.shadow {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
