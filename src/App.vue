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
import { useHead, useSeoMeta } from "@unhead/vue";
const gtag = inject<any>('gtag');
const { showBanner, okClicked } = useCookies(gtag);
const okBannerClicked = () => okClicked();


useSeoMeta({
  // Basic
  title: 'Lucian Ghimpu',
  description: 'Android Engineer · Game Dev · Pixel Artist · Writes about tech, creativity, and occasionally Vim-induced suffering.',

  // Open Graph (Facebook, LinkedIn, WhatsApp, iMessage, Slack, etc.)
  ogSiteName: 'Lucian Ghimpu',
  ogTitle: 'Lucian Ghimpu',
  ogDescription: 'Android Engineer · Game Dev · Pixel Artist · Writes about tech, creativity, and occasionally Vim-induced suffering.',
  ogType: 'website',
  ogImage: {
    url: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1712331913/lucianghimpu.com/android-interview/post-image.jpg',
    width: 1200,
    height: 600,
    alt: 'Lucian Ghimpu – Android & Game Dev Blog',
    type: 'image/jpeg',
  },

  // Twitter / X
  twitterCard: 'summary_large_image',
  twitterSite: '@lucianghimpu',        // change if you have one
  twitterCreator: '@lucianghimpu',
  twitterTitle: 'Lucian Ghimpu',
  twitterDescription: 'Android Engineer · Game Dev · Pixel Artist · Writes about tech, creativity, and occasionally Vim-induced suffering.',
  twitterImage: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1712331913/lucianghimpu.com/android-interview/post-image.jpg',
});

useHead({
  meta: [
    { name: 'theme-color', content: '#ffffff' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Lucian Ghimpu' },
    { 'http-equiv': 'content-language', content: 'en' },
  ],
  link: [
    { rel: 'canonical', href: () => window.location.href },
  ],
});

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
