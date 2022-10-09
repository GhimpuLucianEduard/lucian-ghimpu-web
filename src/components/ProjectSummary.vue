<template>
  <div class="flex flex-col lg:flex-row items-center w-full">
    <div class="flex flex-col items-center xl:w-5/12">
      <div class="flex flex-row justify-center">
        <slot name="icon"></slot>
        <p class="text-subtitle-small text-center ml-4">{{ title }}</p>
      </div>
      <p class="text-body text-center w-80 xl:w-[480px] md:mt-6 mt-9">
        <slot name="description"></slot>
      </p>
      <button class="lg:visible lg:block mt-6 invisible hidden btn">View More</button>
    </div>
    <div
      class="mt-9 xl:w-7/12"
      :class="{
        'lg:order-first lg:mr-6': props.style === SummaryStyle.Left,
        'lg:ml-6': props.style === SummaryStyle.Right,
      }"
    >
      <slot name="images"></slot>
    </div>
    <button class="lg:invisible lg:hidden btn mt-9">View More</button>
  </div>
</template>

<script setup lang="ts">
import { SummaryStyle } from '@/types/SummaryStyle';
import type { PropType } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  style: String as PropType<SummaryStyle>,
});
</script>
