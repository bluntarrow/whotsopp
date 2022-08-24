<template>
  <div
    class="bg-zinc-800 h-[100vh] col-span-1 flex flex-col text-zinc-300 border-r border-zinc-500/50"
  >
    <TopBar></TopBar>
    <div class="p-2 pb-0">
      <SearchBar></SearchBar>
    </div>
    <div class="px-2 h-full overflow-auto">
      <MessageList></MessageList>
    </div>
  </div>
</template>
<script setup>
import MessageList from "./leftNav/MessageList.vue";
import TopBar from "./leftNav/TopBar.vue";
import SearchBar from "./leftNav/SearchBar.vue";
</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .router-link-active,
  .router-link-exact-active {
    @apply bg-zinc-600;
  }
}
</style>
