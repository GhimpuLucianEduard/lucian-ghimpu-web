<template>
  <div>
    Projects
    <ProjectSummary>
      <img :src="matchmefyLogo" alt="img" class="w-24 h-24" />
    </ProjectSummary>
  </div>
</template>

<script setup lang="ts">
import matchmefyLogo from '@/assets/ico-matchmefy.svg';
import ProjectSummary from '../components/ProjectSummary.vue';
</script>
