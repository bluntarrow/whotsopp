<template>
  <div class="p-40 pb-0">
    <h1 class="text-center text-4xl mb-6">
      Get Started
      <div class="text-base text-zinc-500">Fill to continue</div>
    </h1>

    <input
      type="text"
      class="w-full bg-zinc-600 px-6 py-2 rounded-md outline-zinc-400 placeholder:text-zinc-400 text-zinc-300"
      v-model="name"
      placeholder="Display name"
    />

    <input
      type="text"
      class="w-full bg-zinc-600 px-6 py-2 rounded-md mt-4 outline-zinc-400 placeholder:text-zinc-400 text-zinc-300"
      v-model="about"
      placeholder="About"
    />

    <input
      type="email"
      class="w-full bg-zinc-600 px-6 py-2 rounded-md mt-4 outline-zinc-400 placeholder:text-zinc-400 text-zinc-300"
      v-model="email"
      placeholder="Email"
    />

    <input
      type="password"
      class="w-full bg-zinc-600 px-6 py-2 rounded-md mt-4 outline-zinc-400 placeholder:text-zinc-400 text-zinc-300"
      v-model="password"
      placeholder="Password"
    />
    <div class="flex justify-center">
      <button class="w-1/2 py-2 bg-zinc-800 rounded mt-4" @click="createUser()">
        Create Account
      </button>
    </div>
    <p class="text-center text-zinc-400 text-xs mt-8">
      Already have an account?
      <router-link to="/login" class="underline">Login.</router-link>
    </p>
  </div>
</template>
<script setup>
import { auth, usersRef } from "../data/db.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { addDoc } from "firebase/firestore";

const router = useRouter();

const pfp = ref("img1");
const about = ref(null);
const name = ref(null);
const email = ref(null);
const password = ref(null);

const createUser = () => {
  if (name.value && email.value && password.value) {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((cred) => {
        addDoc(usersRef, {
          userid: cred.user.uid,
          username: name.value,
          about: about.value,
          pfp: pfp.value,
        });

        router.replace({ path: "/" });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
};
</script>
