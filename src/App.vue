<script setup>
import Leftnav from "./components/app/Leftnav.vue";
</script>

<template>
  <div class="h-[100vh] overflow-hidden">
    <div class="grid grid-cols-4 w-full h-full text-zinc-50 bg-zinc-900 overflow-hidden">
      <Leftnav></Leftnav>
      <div class="h-full col-span-3  rounded-tl overflow-y-auto">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
<style>
/* .fade-enter-active,
.fade-leave-active {
  transition: all 5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>
