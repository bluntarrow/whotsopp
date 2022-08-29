<template>
  <div
    class="bg-zinc-900 h-[100vh] flex flex-col text-zinc-300 border-r relative border-zinc-500/50"
  >
    <TopBar @openProfile="profile = true"></TopBar>
    <div class="p-2 pb-0">
      <SearchBar></SearchBar>
    </div>
    <div class="px-2 h-full overflow-auto">
      <ChatList></ChatList>
    </div>
    <transition name="slide">
      <StatusList v-if="status"></StatusList>
    </transition>
    <transition name="slide">
      <Profile v-if="profile" @closeProfile="profile = false"></Profile>
    </transition>
    <transition name="slide">
      <div v-if="authstate" class="absolute h-full w-full flex flex-col overflow-hidden bg-zinc-800"></div>
    </transition>
  </div>
</template>
<script setup>
import StatusList from "./leftNav/StatusList.vue";
import Profile from "./leftNav/Profile.vue";
import ChatList from "./leftNav/ChatList.vue";
import TopBar from "./leftNav/TopBar.vue";
import SearchBar from "./leftNav/SearchBar.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import { auth } from "../../data/db";
import { onAuthStateChanged } from "firebase/auth";

const route = useRoute();
const status = ref(false);
const profile = ref(false);
const authstate = ref(false);

onAuthStateChanged(auth, (user) => {
  if (user) {
    authstate.value = false;
    profile.value = false;
    status.value = false;
  } else {
    authstate.value = true;
  }
});
const setStatus = () => {
  if (route.name == "status") {
    status.value = true;
  } else {
    status.value = false;
  }
};

setStatus();
watch(() => route.name, setStatus);
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
