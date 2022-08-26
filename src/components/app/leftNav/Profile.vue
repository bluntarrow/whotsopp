<template>
  <div class="absolute h-full w-full flex flex-col overflow-y-auto text-zinc-300 bg-zinc-900">
    <div class="bg-zinc-800 p-4 pt-20">
      <div class="flex items-center gap-4">
        <ArrowLeftIcon class="h-4 cursor-pointer" @click="$emit('closeProfile')"></ArrowLeftIcon>
        <h2>Profile</h2>
      </div>
    </div>

    <div class="h-full overflow-auto  pt-6">
      <div class="flex flex-col items-center">
        <img
          src="../../../assets/img/img8.jpg"
          alt="profile picture"
          class="h-48 w-48 rounded-full object-cover bg-cover"
        />
      </div>
      <div class="mt-8">
        <h3 class="text-xs text-emerald-600 px-4">Your name</h3>
        <div class="flex justify-between items-center mt-3 px-4">
            <div>Fred</div>
            <div class="w-4">
              <PencilIcon class="cursor-pointer w-4 hover:text-zinc-400"></PencilIcon>
            </div>
        </div>
        <hr class="my-2 border-4 border-black/25">
        <p class="text-sm font-thin text-zinc-400 px-4">This is not your username or pin. This name will be visible to all your contacts.</p>
      </div>
      <div class="mt-8">
        <h3 class="text-xs text-emerald-600 px-4">About</h3>
        <div class="flex justify-between items-center mt-3 px-4">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div class="w-4">
              <PencilIcon class="cursor-pointer w-4 hover:text-zinc-400"></PencilIcon>
            </div>
        </div>
        <hr class="my-2 border-4 border-black/25">
      </div>
    </div>
  </div>
</template>
<script setup>
import { ArrowLeftIcon, PencilIcon } from "@heroicons/vue/20/solid";
</script>
