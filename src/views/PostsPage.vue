<template>
  <div class="flex flex-col items-center container w-full mt-12 pb-12">
    <h1 class="text-title text-center">Sometimes I also write about stuff ✍️</h1>
    <div class="grid xl:grid-cols-2 grid-cols-1 gap-12 md:mt-12 mt-9">
      <PostPreview
        class="h-auto mb-auto"
        v-for="post in store.posts"
        :key="post.title"
        :title="post.title"
        :subtitle="post.subtitle"
        :labels="post.tags"
        :intro="post.intro"
        :link="post.link"
        :image="post.image"
      >
        <template #content>
          <div v-html="post.content"></div>
        </template>
      </PostPreview>
    </div>
  </div>
</template>

<script setup lang="ts">
import PostPreview from '@/components/PostPreview.vue';
import { useStore } from '@/store';

const store = useStore();
</script>

<style scoped></style>
