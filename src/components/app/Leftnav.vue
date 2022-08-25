<template>
  <div
    class="bg-zinc-900 h-[100vh] col-span-1 flex flex-col text-zinc-300 border-r border-zinc-500/50"
  >
    <TopBar></TopBar>
    <div class="p-2 pb-0">
      <SearchBar></SearchBar>
    </div>
    <div class="px-2 h-full overflow-auto">
      <ChatList></ChatList>
    </div>
  </div>
</template>
<script setup>
import ChatList from "./leftNav/ChatList.vue";
import TopBar from "./leftNav/TopBar.vue";
import SearchBar from "./leftNav/SearchBar.vue";
</script>

