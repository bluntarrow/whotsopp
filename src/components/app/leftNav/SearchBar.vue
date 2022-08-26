<template>
  <div class="flex text-zinc-400/75 px-2 items-center">
    <div class="bg-zinc-800 my-2 py-2 px-3 rounded-md flex items-center grow">
      <MagnifyingGlassIcon class="h-4 mr-4"></MagnifyingGlassIcon>
      <input
        type="text"
        placeholder="Search or start new chat"
        class="bg-transparent placeholder:text-zinc-400 text-sm outline-none"
      />
    </div>
    <div class="w-4 ml-2">
      <Bars3BottomRightIcon class="h-4"></Bars3BottomRightIcon>
    </div>
  </div>
</template>
<script setup>
import {
  MagnifyingGlassIcon,
  Bars3BottomRightIcon,
} from "@heroicons/vue/20/solid";
</script>
