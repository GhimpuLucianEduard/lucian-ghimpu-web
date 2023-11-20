<template>
  <div
    class="flex flex-col align-middle justify-center border-2 border-indigo rounded-[20px] hover:bg-indigo hover:text-white transition-colors duration-300 cursor-pointer"
    :class="{
      'lg:w-[196px] w-[155px] h-[44px]': props.style === LabelStyle.Normal,
      'h-[36px] pl-3 pr-3': props.style === LabelStyle.Small,
    }"
  >
    <p
      class="text-center"
      :class="{
        'text-xl': props.style === LabelStyle.Normal,
        'text-base': props.style == LabelStyle.Small,
      }"
    >
      <router-link class="no-underline" :to="{ path: '/posts', query: { tag: label } }">
        {{ label }}
      </router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { LabelStyle } from '@/types/LabelStyle';
import type { PropType } from 'vue';

const props = defineProps({
  label: String,
  style: {
    type: String as PropType<LabelStyle>,
    default: LabelStyle.Normal,
  },
});
</script>
