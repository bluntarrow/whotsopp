<template>
  <div
    class="selft-end px-4 py-2 flex gap-4 items-center bg-zinc-800 text-zinc-500/75"
  >
    <FaceSmileIcon class="h-8 w-8" @click="sendMessage()"></FaceSmileIcon>
    <PaperClipIcon class="h-8 w-8"></PaperClipIcon>
    <input
      class="w-full bg-zinc-600/75 text-zinc-300 placeholder:text-zinc-400 px-4 py-2 rounded-md outline-none"
      @focusin="focused = true"
      @focusout="focused = false"
      placeholder="Type a message"
      type="text"
      v-model="message"
    />
    <button
      @click="sendMessage()"
      class="rounded-full bg-emerald-600 p-2"
      v-if="focused || message"
    >
      <PaperAirplaneIcon class="h-6 w-6 text-zinc-100"></PaperAirplaneIcon>
    </button>
    <MicrophoneIcon v-else class="h-8 w-8"></MicrophoneIcon>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { FaceSmileIcon, PaperClipIcon } from "@heroicons/vue/24/outline";
import { MicrophoneIcon, PaperAirplaneIcon } from "@heroicons/vue/20/solid";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const focused = ref(false);

const message = ref("");

const route = useRoute();
const store = useStore();

// send messages

// const sendMessage = () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const q = query(
//         chatsRef,
//         where("users", "in", [route.params.id, user.uid])
//       );
//       let payloads = {
//         messageurl: route.params.id,
//         messagesent: { message: message.value, sender: 111 },
//       };
//       if (message.value) {

//       }
//     }
//   });
// };
</script>
