<template>
  <div class="flex flex-col items-center container">
    <div class="flex flex-row justify-center">
      <slot name="icon"></slot>
      <p class="text-subtitle-small text-center ml-4">{{ title }}</p>
    </div>
    <p class="text-body text-center w-80 mt-9">
      <slot name="description"></slot>
    </p>
    <div class="mt-9">
      <slot name="images"></slot>
    </div>
    <button class="btn mt-9">View More</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
});
</script>
