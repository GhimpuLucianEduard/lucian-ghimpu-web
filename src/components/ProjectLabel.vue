<template>
  <div
    class="flex flex-col align-middle justify-center border-2 border-indigo l:w-[196px] w-[155px] h-[44px] rounded-[20px]"
  >
    <p class="text-white text-body text-center">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: String,
});
</script>
