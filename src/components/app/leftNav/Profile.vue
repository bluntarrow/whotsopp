<template>
  <div
    class="absolute h-full w-full flex flex-col overflow-y-auto text-zinc-300 bg-zinc-900"
  >
    <div class="bg-zinc-800 p-4 pt-20">
      <div class="flex items-center gap-4">
        <ArrowLeftIcon
          class="h-4 cursor-pointer"
          @click="$emit('closeProfile')"
        ></ArrowLeftIcon>
        <h2>Profile</h2>
      </div>
    </div>

    <div class="h-full overflow-auto pt-6" v-if="currentuser">
      <div class="flex flex-col items-center">
        <img
          :src="getImg(currentuser.pfp)"
          alt="profile picture"
          class="h-48 w-48 rounded-full object-cover bg-cover"
        />
      </div>
      <div class="mt-8">
        <h3 class="text-xs text-emerald-600 px-4">
          Your Name
        </h3>
        <div class="flex justify-between items-center mt-3 px-4">
          <div>{{ currentuser.username }}</div>
          <div class="w-4">
            <PencilIcon
              class="cursor-pointer w-4 hover:text-zinc-400"
            ></PencilIcon>
          </div>
        </div>
        <hr class="my-2 border-4 border-black/25" />
        <p class="text-sm font-thin text-zinc-400 px-4">
          This is not your username or pin. This name will be visible to all
          your contacts.
        </p>
      </div>
      <div class="mt-8">
        <h3 class="text-xs text-emerald-600 px-4">About</h3>
        <div class="flex justify-between items-center mt-3 px-4">
          <div>{{ currentuser.about }}</div>
          <div class="w-4">
            <PencilIcon
              class="cursor-pointer w-4 hover:text-zinc-400"
            ></PencilIcon>
          </div>
        </div>
        <hr class="my-2 border-4 border-black/25" />
      </div>
      <div
        class="text-center uppercase my-2 py-2 mx-2 rounded cursor-pointer hover:bg-zinc-800 text-sm text-zinc-500 hover:text-emerald-400 font-semibold"
        @click="logout"
      >
        logout
      </div>
    </div>
  </div>
</template>
<script setup>
import { ArrowLeftIcon, PencilIcon } from "@heroicons/vue/20/solid";
import { auth, usersRef } from "../../../data/db.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ref } from "vue";
import { getDocs, query, where } from "firebase/firestore";

const logout = () => {
  signOut(auth);
};
const currentuser = ref(null);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
    const q = query(usersRef, where("userid", "==", user.uid));
    getDocs(q).then((docs) => {
      docs.forEach((doc) => {
        console.log(doc.data());
        currentuser.value = doc.data();
      });
    });
  }
});

const getImg = (imgurl) => {
  return new URL(`../../../assets/img/${imgurl}.jpg`, import.meta.url);
};
</script>
