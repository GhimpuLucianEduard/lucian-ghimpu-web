<template>
  <div class="flex flex-row">
    <img :src="icon" :alt="alt" class="w-8 h-8 mr-6" />
    <template v-if="isClickable">
      <a :href="link" class="text-link text-body hover:underline">{{ text }}</a>
    </template>
    <template v-else>
      <p class="text-white text-body">{{ text }}</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  text: String,
  icon: String,
  alt: String,
  isLink: Boolean,
  link: String,
});

// Determine if the text is clickable
const isClickable = computed(() => props.isLink && props.link);
</script>
