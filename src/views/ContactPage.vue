<template>
  <div class="flex flex-col items-center container h-screen pt-12">
    <p class="text-title text-center">You can find me 👇</p>
    <div class="grid xl:grid-cols-2 grid-cols-1 gap-12 md:mt-12 mt-9 mb-4">
      <ContactItem :text="'Lucian Eduard Ghimpu'" :icon="userIcon" />
      <ContactItem :text="'ghimpulucianeduard@gmail.com'" :icon="mailIcon" />
      <ContactItem
        :text="'GhimpuLucianEduard'"
        :icon="githubIcon"
        :is-link="true"
        :link="'https://github.com/GhimpuLucianEduard'"
      />
      <ContactItem
        :text="'ghimpu-lucian-eduard'"
        :icon="stackIcon"
        :is-link="true"
        :link="'https://stackoverflow.com/users/7679183/ghimpu-lucian-eduard'"
      />
      <ContactItem
        :text="'lucian-eduard-ghimpu'"
        :icon="linkedInIcon"
        :is-link="true"
        :link="'https://www.linkedin.com/in/lucian-eduard-ghimpu-21b33b131'"
      />
      <ContactItem
        :text="'lucianghimpu'"
        :icon="twitterIcon"
        :is-link="true"
        :link="'https://twitter.com/lucianghimpu'"
      />
      <ContactItem
        :text="'lucian.gmp'"
        :icon="instaIcon"
        :is-link="true"
        :link="'https://www.instagram.com/lucian.gmp'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import userIcon from '@/assets/ico-user.svg';
import mailIcon from '@/assets/ico-mail.svg';
import githubIcon from '@/assets/ico-github.svg';
import stackIcon from '@/assets/ico-stack.svg';
import linkedInIcon from '@/assets/ico-linkedin.svg';
import twitterIcon from '@/assets/ico-twitter.svg';
import instaIcon from '@/assets/ico-insta.svg';
import ContactItem from '../components/ContactItem.vue';
</script>
