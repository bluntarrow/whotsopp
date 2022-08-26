<template>
  <div class="flex flex-col gap-1 py-4 px-16 h-full">
    <!-- encryption notice -->
    <div
      class="text-yellow-600 self-center bg-zinc-800/50 p-4 mb-4 rounded w-1/2 text-center"
    >
      <LockClosedIcon class="w-4 inline"></LockClosedIcon>
      Messages and calls are ende-to-end encrypted, No one outside of this chat,
      not even whotsopp, can read or listen to them. Click to learn more.
    </div>

    <!-- messages -->
    <div
      v-if="messages"
      v-for="(message, i) in messages.messages"
      :key="i"
      :class="
        message.sender == $route.params.id
          ? 'bg-zinc-900/75 self-start'
          : 'bg-emerald-700/50 self-end'
      "
      class="max-w-[65%] rounded px-4 py-2"
    >
      {{ message.message }}
    </div>
  </div>
</template>
<script setup>
import { LockClosedIcon } from "@heroicons/vue/24/solid";
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const messages = computed(()=>store.state.messages);

// fetch messages
const fetchMessages = () => {
  store.dispatch('fetchMessages', route.params.id)
};

fetchMessages();
watch(() => route.params.id, fetchMessages);
</script>
