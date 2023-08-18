<template>
  <div class="flex flex-col container p-6 bg-surface-grey rounded-3xl shadow-md">
    <article class="prose dark:prose-invert">
      <h2>
        <a :href="link" class="no-underline font-bold hover:text-indigo">
          {{ title }}
        </a>
      </h2>
      <em>{{ subtitle }}</em>
      <div class="flex flex-wrap md:flex-row mt-6 gap-x-4 md:gap-y-0 gap-y-4">
        <ProjectLabel
          v-for="label of labels"
          :key="label"
          :style="LabelStyle.Small"
          :label="label"
        />
      </div>
      <img class="rounded-xl" v-if="image" :src="image" alt="post-preview" />
      <h3>{{ intro }}</h3>
      <div>
        <slot name="content"></slot>
      </div>
      <div class="flex flex-col mt-6">
        <a :href="link" class="prose-lead hover:text-indigo">Read more</a>
      </div>
    </article>
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
  image: String,
});
</script>
