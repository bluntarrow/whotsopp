<template>
  <div class="flex py-4 px-4 bg-zinc-800 justify-between items-center">
    <div v-if="user" class="flex items-center gap-4">
      <img
        :src="getImg(user.pfp)"
        class="h-8 w-8 bg-cover object-cover rounded-full"
      />
      <div class="">{{ user.name }}</div>
    </div>
    <div v-else class="h-8 w-8 bg-zinc-600 rounded-full"></div>
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
import { ref } from "vue";

const route = useRoute();

const user = ref(null);

const getImg = (imgurl) => {
  return new URL(`../../assets/img/${imgurl}.jpg`, import.meta.url);
};
fetch("http://localhost:3001/users/" + route.params.id)
  .then((res) => res.json())
  .then((data) => (user.value = data))
  .catch((err) => console.log(err.message));
</script>
