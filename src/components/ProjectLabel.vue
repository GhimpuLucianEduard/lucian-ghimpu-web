<template>
  <div
    class="flex flex-col align-middle justify-center border-2 border-indigo rounded-[20px]"
    :class="{
      'lg:w-[196px] w-[155px] h-[44px]': props.style === LabelStyle.Normal,
      'w-[86px] h-[36px]': props.style === LabelStyle.Small,
    }"
  >
    <p
      class="text-center"
      :class="{
        'text-xl': props.style === LabelStyle.Normal,
        'text-base': props.style == LabelStyle.Small,
      }"
    >
      {{ label }}
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
