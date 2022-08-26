<template>
  <div class="absolute h-full w-full overflow-y-auto bg-zinc-800">
    <ul>
      <li>
        <router-link
          to="/status/111"
          class="flex gap-3 mt-12 items-center w-full py-3 px-2 rounded hover:bg-zinc-700/50"
        >
          <img
            :src="getImg('img8')"
            class="h-10 w-10 bg-cover object-cover rounded-full"
          />

          <div class="text-sm font-semibold grow">
            My Status
            <div class="text-xs text-zinc-300/75">No updates</div>
          </div>
        </router-link>
        <hr class="border-zinc-500 mt-4 mx-2" />
        <div class="uppercase text-xs pl-2 pt-1 text-zinc-500 font-medium mb-1">
          recent
        </div>
      </li>

      <li v-if="chats.length" v-for="chat in chats">
        <router-link
          :to="'/status/' + chat.id"
          class="flex gap-3 items-center w-full py-3 px-2 rounded hover:bg-zinc-700/50"
        >
          <img
            :src="getImg(chat.pfp)"
            class="h-10 w-10 bg-cover object-cover border-2 border-emerald-600 rounded-full"
          />

          <div class="text-sm font-semibold grow">
            {{ chat.name }}
            <div class="text-xs text-zinc-300/75">today at 11:49 am</div>
          </div>
        </router-link>
      </li>
      <li v-else class="animate-pulse py-3 px-2 flex gap-3" v-for="i in 3">
        <div
          class="h-10 w-10 bg-cover object-cover bg-zinc-700 rounded-full"
        ></div>
        <div class="grow">
          <div class="bg-zinc-700 w-36 h-2 my-2"></div>
          <div class="bg-zinc-700 w-20 h-2"></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const chats = computed(() => store.state.users);
store.dispatch("fetchUsers");
const getImg = (imgurl) => {
  return new URL(`../../../assets/img/${imgurl}.jpg`, import.meta.url);
};
</script>
