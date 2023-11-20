<template>
  <div class="flex flex-col items-center container w-full mt-12 pb-12">
    <h1 class="text-title text-center">Sometimes I also write about stuff ✍️</h1>
    <p v-if="!hasQueryTag" class="pt-12 italic">
      P.S: Click on a
      <b class="text-indigo">tag</b>
      to filter the posts 👀
    </p>
    <p v-if="hasQueryTag" class="pt-12 italic text-center">
      Showing {{ filteredPosts.length }} posts for tag:
      <b class="text-indigo">{{ route.query.tag }}</b>
      <br />
      <router-link class="text-indigo not-italic hover:underline" :to="{ path: '/posts' }">
        Clear filter
      </router-link>
    </p>
    <div class="grid xl:grid-cols-2 grid-cols-1 gap-12 md:mt-12 mt-9">
      <PostPreview
        class="h-auto mb-auto"
        v-for="post in filteredPosts"
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
import { computed } from 'vue';
import PostPreview from '@/components/PostPreview.vue';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();
const hasQueryTag = computed(() => !!route.query.tag);
const filteredPosts = computed(() => {
  const queryTag = route.query.tag as string | undefined;
  if (queryTag) {
    const lowerCaseQueryTag = queryTag.toLowerCase();
    return store.posts.filter((post) =>
      post.tags.some((tag) => tag.toLowerCase() === lowerCaseQueryTag)
    );
  }
  return store.posts;
});
</script>

<style scoped></style>
