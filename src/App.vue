<template>
  <div class="flex flex-col h-screen bg-dark-grey">
    <Navbar />
    <transition name="slide">
      <CookieBanner v-if="showBanner" @ok-clicked="okBannerClicked"></CookieBanner>
    </transition>
    <RouterView />
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { RouterView } from 'vue-router';
import Navbar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import CookieBanner from '@/components/CookieBanner.vue';
import useCookies from '@/composables/useCookies';
const gtag = inject<any>('gtag');
const { showBanner, okClicked } = useCookies(gtag);
const okBannerClicked = () => okClicked();
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
