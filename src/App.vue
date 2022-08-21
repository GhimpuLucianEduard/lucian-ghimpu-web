<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/NavBar.vue';
</script>

<template>
  <div class="flex flex-col h-screen bg-dark-grey">
    <Navbar />
    <RouterView />
  </div>
</template>
