<template>
 <ul>
      <li v-for="i in 50">
        <router-link
          :to="'/chat/'+i"
          class="flex gap-3 items-center w-full py-3 px-2 rounded hover:bg-zinc-700/50"
        >
          <div class="h-10 w-10 bg-emerald-300 rounded-full"></div>
  
          <div class="text-sm font-semibold grow">
            David
            <div class="text-xs text-zinc-300/75">how far</div>
          </div>
  
          <div class="text-[10px] font-semibold flex flex-col justify-end items-end">
           <span class="text-emerald-500">12:11pm</span>
            <div class="bg-emerald-500 text-zinc-100 p-0.5 w-max rounded-full mt-0.5">152</div>
          </div>
        </router-link>
        <hr class="ml-16 border-zinc-500/50">
      </li>
    </ul>
</template>