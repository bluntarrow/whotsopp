<template>
  <div class="flex py-4 px-4 bg-zinc-700 justify-between items-center">
    <div class="h-8 w-8 bg-teal-500 rounded-full"></div>
    <div class="flex gap-6">
      <FireIcon class="h-5"></FireIcon>
      <ChatBubbleBottomCenterTextIcon class="h-5"></ChatBubbleBottomCenterTextIcon>
      <EllipsisVerticalIcon class="h-5"></EllipsisVerticalIcon>
    </div>
  </div>
</template>
<script setup>
import { FireIcon, ChatBubbleBottomCenterTextIcon, EllipsisVerticalIcon } from "@heroicons/vue/24/outline";
</script>
