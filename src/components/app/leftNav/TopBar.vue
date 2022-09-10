<template>
  <div class="flex py-4 px-4 w-80 bg-zinc-800 justify-between items-center">
 
    <img
      v-if="currentuser"
      :src="getImg(currentuser.pfp)"
      class="h-8 w-8 bg-cover object-cover rounded-full cursor-pointer"
      @click="$emit('openProfile')"
    />
    <div class="flex gap-6">
      <router-link to="/status">
        <FireIcon class="h-5"></FireIcon>
      </router-link>
      <ChatBubbleBottomCenterTextIcon
        class="h-5"
      ></ChatBubbleBottomCenterTextIcon>
      <EllipsisVerticalIcon class="h-5"></EllipsisVerticalIcon>
    </div>
  </div>
</template>
<script setup>
import {
  FireIcon,
  ChatBubbleBottomCenterTextIcon,
  EllipsisVerticalIcon,
} from "@heroicons/vue/24/outline";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, query, where } from "firebase/firestore";
import { ref } from "vue";
import { auth, usersRef } from "../../../data/db";

const currentuser = ref(null);

onAuthStateChanged(auth, (user) => {
  if (user) {
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
