<template>
  <div
    class="fixed bottom-0 mt-16 md:mt-24 flex flex-col items-center w-full bg-indigo h-24 md:h-12"
  >
    <div class="container flex flex-col md:flex-row items-center h-full">
      <p class="text-white text-sm md:text-lg text-center mt-3 md:mt-0 mx-10 md:mx-0">
        We use cookies 🍪 for more details check our policy
        <router-link class="text-sm md:text-lg underline font-bold" to="cookies">here</router-link>
      </p>
      <button class="font-bold mt-2 px-4 md:mt-0 md:ml-auto" @click="$emit('okClicked')">OK</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['okClicked'],
});
</script>

<style></style>
