<template>
  <div class="mb-9">
    <ProjectSummary title="01. Matchmefy">
      <template #icon>
        <img :src="matchmefyLogo" alt="matchmefy-logo" class="w-[52px] h-9" />
      </template>

      <template #description>
        <p>
          Android app that integrates the Spotify API to compute
          <span class="text-indigo">match score</span>
          between users and provide insight about their musical taste
        </p>
      </template>

      <template #images>
        <div class="grid grid-cols-3 grid-rows-1 gap-6">
          <img :src="matchmefySlide2" class="matchmefy-image" alt="matchmefy-slide2" />
          <img :src="matchmefySlide4" class="matchmefy-image" alt="matchmefy-slide4" />
          <img :src="matchmefySlide5" class="matchmefy-image" alt="matchmefy-slide5" />
        </div>
      </template>
    </ProjectSummary>

    <ProjectSummary class="mt-[72px]" title="02. Coin Apes">
      <template #icon>
        <img :src="coinApesLogo" alt="coin-apes-logo" class="w-[42px] h-9" />
      </template>

      <template #description>
        <p>
          Coin Apes is a
          <span class="text-indigo">data aggregator</span>
          that collects data from social media platforms in order to provide more insight into
          cryptocurrency trends
        </p>
      </template>

      <template #images>
        <img :src="coinApesHome" alt="coin-apes-home" />
      </template>
    </ProjectSummary>
  </div>
</template>

<script setup lang="ts">
import matchmefyLogo from '@/assets/ico-matchmefy.svg';
import coinApesLogo from '@/assets/ico-coin-apes.svg';
import matchmefySlide2 from '@/assets/img-matchmefy-slide2.svg';
import matchmefySlide4 from '@/assets/img-matchmefy-slide4.svg';
import matchmefySlide5 from '@/assets/img-matchmefy-slide5.svg';
import coinApesHome from '@/assets/img-coin-apes-home.svg';
import ProjectSummary from '../components/ProjectSummary.vue';
</script>

<style lang="postcss" scoped></style>
