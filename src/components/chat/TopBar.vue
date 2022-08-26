<template>
  <div class="flex py-4 px-4 bg-zinc-800 justify-between items-center">
    <div v-if="user" @click="openInfo()" class="flex items-center gap-4">
      <img
        :src="getImg(user.pfp)"
        class="h-8 w-8 bg-cover cursor-pointer object-cover rounded-full"
      />
      <div class="cursor-pointer">{{ user.name }}</div>
    </div>
    <div v-else class="h-8 w-8 bg-zinc-600 rounded-full animate-pulse"></div>
    <div class="flex items-center gap-4">
      <MagnifyingGlassIcon class="h-5"></MagnifyingGlassIcon>
      <EllipsisVerticalIcon class="h-5"></EllipsisVerticalIcon>
    </div>
  </div>
</template>
<script setup>
import {
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
} from "@heroicons/vue/24/solid";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

const route = useRoute();
const store = useStore();

const user = computed(() => store.state.openedMessage);
store.dispatch("fetchOpenedMessage", route.params.id);

const openInfo=()=>{
  store.commit("toggleInfo", true);
}

const getImg = (imgurl) => {
  return new URL(`../../assets/img/${imgurl}.jpg`, import.meta.url);
};
</script>
