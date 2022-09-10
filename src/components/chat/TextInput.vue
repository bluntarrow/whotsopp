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
import { getDocs, query, updateDoc, where } from "firebase/firestore";
import { auth, chatsRef } from "../../data/db";
import { onAuthStateChanged } from "firebase/auth";

const focused = ref(false);

const message = ref("");

const route = useRoute();

// send messages

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const q = query(
//       chatsRef,
//       where("users", "array-contains-any", [route.params.id, user.uid])
//     );
//     getDocs(q).then((docs) => {
//       docs.forEach((doc) => {
//         console.log(doc);
//       });
//     });
//   }
// });
const sendMessage = () => {
  onAuthStateChanged(auth, (user) => {
    if (user && message.value) {
      const q = query(
        chatsRef,
        where("users", "==", [route.params.id, user.uid])
      );
      getDocs(q).then((docs) => {
        docs.forEach((doc) => {
          console.log(doc);
          updateDoc(doc.ref, {
            messages: [
              ...doc.data().messages,
              { message: message.value, sender: user.uid },
            ],
          }).then(() => {
            message.value = "";
          });
        });
      });
    }
  });
};
</script>
