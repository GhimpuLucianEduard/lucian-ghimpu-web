<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <div class="flex flex-row items-center">
      <img
        src="https://res.cloudinary.com/dkcw58wif/image/upload/v1670153317/lucianghimpu.com/ico-coin-apes.png"
        alt="coin-apes-logo"
        class="w-[64px]"
      />
      <h1 class="text-title ml-2">Coin Apes</h1>
    </div>
    <p class="text-body text-center md:w-[500px] mt-8">
      Coin Apes is a data aggregator that collects data from social media platforms in order to
      provide more insight into cryptocurrency trends
    </p>
    <div class="grid grid-cols-2 md:grid-rows-1 md:flex md:flex-row grid-rows-2 gap-2 mt-8">
      <ProjectLabel label="Vue.js" />
      <ProjectLabel label="Reddit API" />
      <ProjectLabel label=".NET Core" />
      <ProjectLabel label="MongoDB" />
    </div>
    <div class="lg:w-[856px] mt-9">
      <img
        src="https://res.cloudinary.com/dkcw58wif/image/upload/v1665354513/lucianghimpu.com/img-coin-apes-home.png"
        alt="coin-apes-home"
      />
    </div>
    <div class="flex flex-col lg:w-[856px] mt-8 md:mt-[72px]">
      <h2 class="text-subtitle text-center">⚠️ Disclaimer</h2>
      <p class="text-body-small mt-8">
        As of early 2022, the project is no longer supported. The amount of data coming from Reddit
        increased exponentially in the 2021-2022 bull market, leading to the a massive amount of
        data to be procces and stored. Unfortunatly I do not have the time and resources to maintain
        this as a free project.
      </p>
      <h2 class="project-h2">💡 The Idea</h2>
      <ul class="list-disc pl-4 mt-8">
        <li>
          The idea was to provide a web platform to analyze sentiment about crypto currencies and
          related topics across different social media platforms.
        </li>
        <li>
          The backend ran Cron jobs to fetch and analyze Reddit posts and provide sentiment
          analyses.
        </li>
        <li>The user would then be able to see the result on the web app.</li>
        <li>Future plans also included to provide a public API for that data.</li>
      </ul>
      <div class="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-[72px]">
        <div class="flex flex-col">
          <h2 class="text-subtitle text-center">Web App</h2>
          <ul class="list-disc pl-4 mt-8">
            <li>Vue3 😎</li>
            <li>Typescript ✅</li>
            <li>Composition API & Pinia 🍍</li>
            <li>Vite ⚡</li>
            <li>Tailwind CSS 🎨</li>
          </ul>
        </div>
        <div class="flex flex-col mt-4 md:mt-0">
          <h2 class="text-subtitle text-center">API</h2>
          <ul class="list-disc pl-4 mt-8">
            <li>.NET Core -> containerized in Heroku 🐋</li>
            <li>MongoDB 📦</li>
            <li>Hangfire -> Async Cron jobs 🕦</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 mt-8 md:mt-[72px]">
      <div class="flex flex-row">
        <img :src="gitHubLogo" alt="github-logo" class="w-8 h-8" />
        <a class="text-link ml-2" href="https://github.com/CoinApes/coin-apes-web">Web Project</a>
      </div>
      <a class="text-link" href="https://www.coinapes.com">www.coinapes.com</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import gitHubLogo from '@/assets/ico-github.svg';
import ProjectLabel from '../components/ProjectLabel.vue';
</script>

<style lang="postcss" scoped>
ul li {
  @apply lg:text-xl text-base;
}
</style>
