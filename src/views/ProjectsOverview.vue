<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <p class="text-title text-center">Here's some stuff I built for fun 🏗️</p>

    <ProjectSummary
      @clicked="router.push('ibangen')"
      :style="SummaryStyle.Left"
      class="mt-[72px]"
      title="01. ibangen.io"
    >
      <template #icon>
        <div class="flex flex-col items-center justify-center">
          <p class="text-subtitle">🏦</p>
        </div>
      </template>

      <template #description>
        <p>
          <a class="no-underline hover:underline" href="https://www.ibangen.io">ibangen.io</a>  is a simple
          <span class="text-indigo">IBAN generator</span> that helps you generate IBANs while also providing some handy utility features
        </p>
      </template>

      <template #images>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1735745662/lucianghimpu.com/projects/img-iban-gen-home.png"
          alt="coin-apes-home"
        />
      </template>
    </ProjectSummary>

    <ProjectSummary
      @clicked="router.push('coinapes')"
      :style="SummaryStyle.Right"
      class="md:mt-12 mt-9"
      title="02. Coin Apes"
    >
      <template #icon>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1670153317/lucianghimpu.com/ico-coin-apes.png"
          alt="coin-apes-logo"
          class="w-[42px]"
        />
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

    <ProjectSummary
      @clicked="router.push('matchmefy')"
      :style="SummaryStyle.Left"
      title="03. Matchmefy"
      class="md:mt-12 mt-9"
    >
      <template #icon>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1670153317/lucianghimpu.com/ico-matchmefy.png"
          alt="matchmefy-logo"
          class="w-[52px]"
        />
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

  </div>
</template>

<script setup lang="ts">
import ProjectSummary from "../components/ProjectSummary.vue";
import { SummaryStyle } from "@/types/SummaryStyle";
import router from "@/router";
</script>

<style lang="postcss" scoped></style>
