<template>
  <div
    class="bg-zinc-900 h-[100vh] flex flex-col text-zinc-300 border-l relative border-zinc-500/50"
  >
    <div class="bg-zinc-800 px-4 py-5 w-80">
      <div class="flex items-center gap-4">
        <XMarkIcon
          class="h-4 cursor-pointer"
          @click="$emit('closeInfo')"
        ></XMarkIcon>
        <h2>Contact info</h2>
      </div>
    </div>

    <div class="h-full overflow-auto pt-6">
      <div class="flex flex-col items-center justify-center h-64">
        <img
          :src="getImg(user.pfp)"
          alt="profile picture"
          class="h-40 w-40 rounded-full object-cover bg-cover"
        />
        <h3 class="mt-3 text-lg text-center">
          {{user.name}}
          <h5 class="text-zinc-300/50 text-sm ">Busy</h5>
        </h3>
      </div>
      <hr class="border-4 border-black/25" />

      <div class="px-6 py-2">
        <h6 class="text-xs text-zinc-300/50">About</h6>
        <p class="text-sm mt-1">
          {{user.about}}
        </p>
      </div>
      <hr class="border-4 border-black/25" />

      <div class="px-6 py-2">
        <h6 class="text-xs text-zinc-300/50 mb-2">Media, links and docs</h6>
        <div class="grid grid-cols-3 gap-2">
          <div class="aspect-square bg-zinc-700 rounded-md"></div>
        </div>
      </div>
      <hr class="border-4 border-black/25" />

      <div class="px-6 py-2 text-zinc-400">
        <ul>
          <li v-for="action in others" class="flex text-sm items-center py-4">
            <div class="h-4">
              <component :is="action.icon" class="h-4"></component>
            </div>

            <!-- title and text -->
            <div class="w-full mx-3 text-zinc-300">
              <h6>{{ action.title }}</h6>
              <p v-if="action.message" class="text-xs text-zinc-500">
                {{ action.message }}
              </p>
            </div>

            <!-- end -->
            <div class="h-4" v-if="action.end">
              <ChevronRightIcon
                v-if="action.end == 'icon'"
                class="h-4"
              ></ChevronRightIcon>

              <Switch
                v-else
                v-model="enabled"
                class="relative h-4 w-9 inline-flex items-center rounded-full"
                :class="enabled ? 'bg-zinc-700' : 'bg-zinc-500'"
              >
                <span
                  :class="enabled ? 'translate-x-5' : 'translate-x-0'"
                  class="h-5 w-5 bg-zinc-400 rounded-full"
                ></span>
              </Switch>
            </div>
          </li>
        </ul>
      </div>
      <hr class="border-4 border-black/25" />

      <div class="px-6 py-2 text-zinc-400">
        <ul>
          <li v-for="action in dangers" class="flex text-sm items-center py-4 text-red-600">
            <div class="h-4">
              <component :is="action.icon" class="h-4"></component>
            </div>

            <!-- title and text -->
            <div class="w-full mx-3">
              <h6>{{ action.title }}</h6>
            </div>
          </li>
        </ul>
      </div>
      <hr class="border-4 border-black/25" />
    </div>
  </div>
</template>
<script setup>
import {
  XMarkIcon,
  StarIcon,
  BellIcon,
  ClockIcon,
  LockClosedIcon,
  ChevronRightIcon,
  NoSymbolIcon,
  HandThumbDownIcon,
  TrashIcon,
} from "@heroicons/vue/20/solid";
import { Switch } from "@headlessui/vue";
import { ref,computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();


//fetch user
const user = computed(()=>store.state.openedMessage);
// store.commit('fetchOpenedMessage', route.params.id)

const getImg = (imgurl) => {
  return new URL(`../../assets/img/${imgurl}.jpg`, import.meta.url);
};


//lists
const others = [
  { title: "Starred messages", end: "icon", message: null, icon: StarIcon },
  { title: "Mute notifications", end: "switch", message: null, icon: BellIcon },
  {
    title: "Disappearing messages",
    end: "icon",
    message: "Off",
    icon: ClockIcon,
  },
  {
    title: "Encryption",
    end: null,
    message: "Messages are end to end encrypted. Click to verify",
    icon: LockClosedIcon,
  },
];
const dangers = [
  { title: "Block Name", icon: NoSymbolIcon },
  { title: "Report Name", icon: HandThumbDownIcon},
  {
    title: "Delete chat",
    icon: TrashIcon,
  },
];
const enabled = ref(false);
</script>
