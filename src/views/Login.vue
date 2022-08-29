<template>
  <div class="p-40 pb-0">
    <h1 class="text-center text-4xl mb-6">
      Welcome Back
      <div class="text-base text-zinc-500">Login to continue</div>
    </h1>
    <input
      type="email"
      class="w-full bg-zinc-600 px-6 py-2 rounded-md outline-zinc-400 placeholder:text-zinc-400 text-zinc-300"
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
      <button class="w-1/2 py-2 bg-zinc-800 rounded mt-4" @click="login()">
        Login
      </button>
    </div>
    <p class="text-center text-zinc-400 text-xs mt-8">
      Don't have an account?
      <router-link to="/signup" class="underline">Sign up.</router-link>
    </p>
  </div>
</template>
<script setup>
import { auth } from "../data/db.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref(null);
const password = ref(null);

const login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
    router.replace({ path: "/" });
  });
};
</script>
