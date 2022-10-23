<template>
  <div class="flex flex-col justify-start items-center container w-full h-screen pt-12 md:pt-16">
    <p class="text-title text-center">👋 Hello, I'm Lucian</p>
    <p class="text-body text-center pt-8">
      I'm a
      <span class="text-red-500">Ro</span>
      <span class="text-yellow-400">man</span>
      <span class="text-blue-500">ian</span>
      based Software Developer,
      <br />
      MTG player and gym enthusiast
    </p>

    <div class="flex flex-col justify-center items-center flex-grow text-center">
      <p class="text-body">
        <span class="text-indigo">Random Fact:</span>
        {{ store.currentFact }}
      </p>

      <button class="btn mt-6" @click="onClick">shuffle</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const store = useStore();

    const onClick = () => {
      store.randomizeFact();
    };

    return {
      store,
      onClick,
    };
  },
});
</script>
