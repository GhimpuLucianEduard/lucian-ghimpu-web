<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <div class="flex flex-row items-center">
      <img :src="matchmefyLogo" alt="matchmefy-logo" class="w-[64px] h-12" />
      <h1 class="text-white text-subtitle ml-2">Matchmefy</h1>
    </div>
    <p class="text-body md:text-title text-center ph-4 mt-8">
      Android App that integrates the Spotify API to compute match score between users and provide
      insight about their musical taste
    </p>
    <div class="sm:grid grid-cols-2 md:grid-rows-1 md:flex md:flex-row grid-rows-2 gap-4 mt-8">
      <ProjectLabel label="Android" />
      <ProjectLabel label="Spotify API" />
      <ProjectLabel label="Node.js" />
      <ProjectLabel label="MongoDB" />
    </div>
    <div class="grid grid-cols-3 grid-rows-2 lg:gap-24 gap-6 mt-9">
      <img
        src="https://res.cloudinary.com/dkcw58wif/image/upload/v1665354296/lucianghimpu.com/img-matchmefy-slide1.png"
        alt="matchmefy-slide1"
      />
      <img
        src="https://res.cloudinary.com/dkcw58wif/image/upload/v1665354296/lucianghimpu.com/img-matchmefy-slide2.png"
        alt="matchmefy-slide2"
      />
      <img
        src="https://res.cloudinary.com/dkcw58wif/image/upload/v1665354296/lucianghimpu.com/img-matchmefy-slide3.png"
        alt="matchmefy-slide3"
      />
      <img
        src="https://res.cloudinary.com/dkcw58wif/image/upload/v1665354296/lucianghimpu.com/img-matchmefy-slide4.png"
        alt="matchmefy-slide4"
      />
      <img
        src="https://res.cloudinary.com/dkcw58wif/image/upload/v1665354296/lucianghimpu.com/img-matchmefy-slide5.png"
        alt="matchmefy-slide5"
      />
      <img
        src="https://res.cloudinary.com/dkcw58wif/image/upload/v1665354296/lucianghimpu.com/img-matchmefy-slide6.png"
        alt="matchmefy-slide6"
      />
    </div>
    <div class="flex flex-col mt-12">
      <h2 class="text-subtitle-small text-center">App Architecture</h2>
      <p class="text-body-small text-center mt-8">
        The app is built with the latest Android Jetpack 🚀 libraries using the MVVM 📐
        architectural pattern, data binding and LiveData
      </p>
      <h3 class="text-body text-center mt-8">Other Android libraries used:</h3>
      <ul class="mt-8 list-disc pl-4">
        <li>
          <b>Jetpack Navigation</b>
          -> MVVM navigation, all handled in the view models 🚀
        </li>
        <li>
          <b>Coroutines</b>
          -> used to handle http requests and other async calls 😎
        </li>
        <li>
          <b>Koin</b>
          -> DI 📌
        </li>
        <li>
          <b>Retrofit + OkHttp</b>
          -> staples libraries used to handle http calls to REST apis ☁️
        </li>
        <li>
          <b>AppAuth</b>
          -> used to handle OAuth2 using
        </li>
        <li>
          <b>Timber</b>
          -> Better Logging 📈
        </li>
        <li>
          <b>Firebase</b>
          -> Analytics and Crashalytics 💥
        </li>
      </ul>
      <h2 class="text-subtitle-small text-center">APIs</h2>
      <ul class="mt-8 list-disc pl-4">
        <li>
          <b class="text-indigo">Spotify Web API</b>
          -> Used to fetch the user profile and their top 50 artists and tracks
        </li>
        <li>
          <b>Matchmefy API</b>
          -> Custom REST API developt in Node.js, used to store user data in a Mongo DB and handles
          the "logic" to get the match summary for 2 users
        </li>
      </ul>
      <h2 class="text-subtitle-small text-center mt-8">FAQ</h2>
      <p class="question mt-8">Q: Will Matchmefy be available on iOS and Web?</p>
      <p class="text-body-small mt-8">
        A: It is planned, but not a priority. If you are an iOS dev or web dev and looking to extend
        this project, contact me and I can provided deisgn specs, api, db access and all.
      </p>
      <p class="question mt-8">Q: I can match with myself, is this intended?</p>
      <p class="text-body-small mt-8">
        A: Yes! You can match with yourself but you will not be able to create a playlist.
      </p>
    </div>
    <div class="flex flex-col mt-9 items-center justify-center">
      <a class="link" href="https://www.matchmefy.com">www.matchmefy.com</a>
      <div class="flex flex-row mt-6">
        <img :src="gitHubLogo" alt="github-logo" class="w-8 h-8" />
        <a class="link ml-2" href="https://github.com/GhimpuLucianEduard/Matchmefy">
          Android Project
        </a>
      </div>
      <div class="w-[198px] h-[60px] mt-6">
        <a
          href="https://play.google.com/store/apps/details?id=com.lucianghimpu.matchmefy&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        >
          <img
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gitHubLogo from '@/assets/ico-github.svg';
import matchmefyLogo from '@/assets/ico-matchmefy.svg';
import ProjectLabel from '../components/ProjectLabel.vue';
</script>

<style lang="postcss" scoped>
ul li {
  @apply text-white text-base;
}

.question {
  @apply text-white text-base font-bold;
}
</style>
