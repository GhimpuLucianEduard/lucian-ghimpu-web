<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <p class="text-title text-center">Here's some stuff I built for fun 🏗️</p>
    <ProjectSummary
      @clicked="router.push('matchmefy')"
      :style="SummaryStyle.Left"
      title="01. Matchmefy"
      class="md:mt-12 mt-9"
    >
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
        <div class="grid grid-cols-3 grid-rows-1 md:gap-14 gap-6">
          <img
            src="https://res.cloudinary.com/dkcw58wif/image/upload/v1665354296/lucianghimpu.com/img-matchmefy-slide2.png"
            alt="matchmefy-slide2"
          />
          <img
            src="https://res.cloudinary.com/dkcw58wif/image/upload/v1665354296/lucianghimpu.com/img-matchmefy-slide4.png"
            alt="matchmefy-slide4"
          />
          <img
            src="https://res.cloudinary.com/dkcw58wif/image/upload/v1665354296/lucianghimpu.com/img-matchmefy-slide5.png"
            alt="matchmefy-slide5"
          />
        </div>
      </template>
    </ProjectSummary>

    <ProjectSummary :style="SummaryStyle.Right" class="mt-[72px]" title="02. Coin Apes">
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
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1665354513/lucianghimpu.com/img-coin-apes-home.png"
          alt="coin-apes-home"
        />
      </template>
    </ProjectSummary>
  </div>
</template>

<script setup lang="ts">
import matchmefyLogo from '@/assets/ico-matchmefy.svg';
import coinApesLogo from '@/assets/ico-coin-apes.svg';
import ProjectSummary from '../components/ProjectSummary.vue';
import { SummaryStyle } from '@/types/SummaryStyle';
import router from '@/router';
</script>

<style lang="postcss" scoped></style>
