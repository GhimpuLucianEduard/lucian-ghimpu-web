<template>
  <div class="flex flex-col container xl:w-[526px] p-6 bg-surface-grey rounded-3xl shadow-md">
    <p class="text-subtitle">{{ title }}</p>
    <p class="text-base mt-4">{{ subtitle }}</p>
    <div class="flex flex-row mt-6 gap-x-4">
      <ProjectLabel v-for="label of labels" :key="label" :style="LabelStyle.Small" :label="label" />
    </div>
    <p class="text-2xl mt-12">{{ intro }}</p>
    <div class="text-base mt-6">
      <slot name="content"></slot>
    </div>
    <div class="flex flex-col mt-12 grow">
      <a :href="link" class="text-2xl underline hover:text-indigo mt-auto">Read more</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LabelStyle } from '@/types/LabelStyle';
import ProjectLabel from './ProjectLabel.vue';

defineProps({
  title: String,
  subtitle: String,
  intro: String,
  link: String,
  labels: Array<string>,
});
</script>
