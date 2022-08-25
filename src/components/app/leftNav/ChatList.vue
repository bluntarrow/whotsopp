<template>
  <ul>
    <li v-for="chat in chats">
      <router-link
        :to="'/chat/' + chat.id"
        class="flex gap-3 items-center w-full py-3 px-2 rounded hover:bg-zinc-700/50"
      >
        <img
          :src="getImg(chat.pfp)"
          class="h-10 w-10 bg-cover object-cover rounded-full"
        />

        <div class="text-sm font-semibold grow">
          {{ chat.name }}
          <div class="text-xs text-zinc-300/75">how far</div>
        </div>

        <div
          class="text-[10px] font-semibold flex flex-col justify-end items-end"
        >
          <span class="text-emerald-500">12:11pm</span>
          <div
            class="bg-emerald-500 text-zinc-100 p-0.5 w-max min-w-[18px] text-center rounded-full mt-0.5"
          >
            104
          </div>
        </div>
      </router-link>
      <hr class="ml-16 border-zinc-800" />
    </li>
  </ul>
</template>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store= useStore()

const chats = computed(()=>store.state.users);
store.dispatch('fetchUsers')
const getImg = (imgurl) => {
  return new URL(`../../../assets/img/${imgurl}.jpg`, import.meta.url);
};
</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .router-link-active,
  .router-link-exact-active {
    @apply bg-zinc-800;
  }
}
</style>
