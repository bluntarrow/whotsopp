<template>
  <div class="h-[100vh] bg-zinx-900 text-zinc-300/75">
    <!-- status -->
    <div
      v-if="$route.name == 'status'"
      class="h-full flex flex-col justify-center items-center relative"
    >
      <XMarkIcon class="h-8 text-zinc-300 absolute right-4 top-4 cursor-pointer" @click="$router.go(-1)"></XMarkIcon>
      <FireIcon class="h-24 mb-8"></FireIcon>
      <p class="">Click on a contact to view their status updates</p>
    </div>

    <!-- home -->
    <div
      v-else
      class="h-full flex flex-col justify-center items-center relative"
    >
      <div
        class="h-52 w-52 mb-6 bg-emerald-600 rounded-full flex justify-center items-center"
      >
        <DevicePhoneMobileIcon class="h-24"></DevicePhoneMobileIcon>
      </div>
      <h1 class="text-3xl mb-4">Keep your phone connected</h1>
      <p class="w-1/2 text-center">
        Whotsopp does not connect with your phone to sync messages. To reduce data usage
        connect your laptop to Wi-Fi.
      </p>
    </div>
  </div>
</template>

<script setup>
import {
  DevicePhoneMobileIcon,
  XMarkIcon,
  FireIcon,
} from "@heroicons/vue/24/outline";
</script>
