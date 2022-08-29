<script setup>
import Leftnav from "./components/app/Leftnav.vue";
import Rightnav from "./components/app/Rightnav.vue";
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { auth } from "./data/db.js";

const router = useRouter();
const route = useRoute();

auth.onAuthStateChanged((user) => {
  if (user) {
    if (route.name == "login" || route.name == "signup") {
      router.replace({ path: "/chat" });
    }
  } else {
    if (route.name != "login" || route.name != "signup") {
      router.replace({ path: "/login" });
    }
  }
});

const store = useStore();

const info = computed(() => store.state.info);
const closeInfo = () => {
  store.commit("toggleInfo", false);
};
</script>

<template>
  <div class="h-[100vh] overflow-hidden">
    <div class="flex w-full h-full text-zinc-50 bg-zinc-900 overflow-hidden">
      <Leftnav></Leftnav>
      <div class="h-full w-full overflow-y-auto">
        <RouterView></RouterView>
      </div>
      <transition name="slide">
        <Rightnav
          v-if="info && $route.name != 'status'"
          @closeInfo="closeInfo()"
        ></Rightnav>
      </transition>
    </div>
  </div>
</template>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
