<template>
  <ul>
    
    <li v-if="chats.length" v-for="chat in chats">
      <router-link
        :to="'/chat/' + chat.userid"
        class="flex gap-3 items-center w-full py-3 px-2 rounded hover:bg-zinc-700/50"
        v-if="chat.userid != currentuser"
      >
        <img
          :src="getImg(chat.pfp)"
          class="h-10 w-10 bg-cover object-cover rounded-full"
        />

        <div class="text-sm font-semibold grow">
          {{ chat.username }}
          <div class="text-xs text-zinc-300/75">how far</div>
        </div>

        <div
          class="text-[10px] font-semibold flex flex-col justify-end items-end"
        >
          <span class="text-zinc-500">12:11pm</span>
          <!-- <div
            class="bg-emerald-500 text-zinc-100 p-0.5 w-max min-w-[18px] text-center rounded-full mt-0.5"
          >
            104
          </div> -->
        </div>
      </router-link>
      <hr class="ml-16 border-zinc-800" v-if="chat.userid != currentuser" />
    </li>
    <li v-else class="animate-pulse py-3 px-2 flex gap-3" v-for="i in 3">
      <div
        class="h-10 w-10 bg-cover object-cover bg-zinc-700 rounded-full"
      ></div>
      <div class="grow">
        <div class="bg-zinc-700 w-36 h-2 my-2"></div>
        <div class="bg-zinc-700 w-20 h-2"></div>
      </div>
    </li>
  </ul>
</template>
<script setup>
import { auth, usersRef } from "../../../data/db.js";
import { onSnapshot } from "firebase/firestore";
import { ref } from "vue";
import { onAuthStateChanged } from "firebase/auth";

const chats = ref([]);
const currentuser = ref(null);
onAuthStateChanged(auth, (user) => {
  currentuser.value = user.uid;
  if (user) {
    onSnapshot(usersRef, (snapshot) => {
      chats.value = [];
      snapshot.forEach((doc) => {
        chats.value.push(doc.data());
      });
    });
  }
});

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
