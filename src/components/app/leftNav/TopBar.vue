<template>
  <div class="flex py-4 px-4 w-80 bg-zinc-800 justify-between items-center">
    <img
      src="../../../assets/img/img8.jpg"
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
</script>
