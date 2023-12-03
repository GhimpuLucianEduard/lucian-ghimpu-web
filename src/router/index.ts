import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import WorkInProgress from '../views/WorkInProgress.vue';
import NotFound from '../views/NotFound.vue';
import ProjectsOverview from '@/views/ProjectsOverview.vue';
import Matchmefy from '@/views/MatchmefyPage.vue';
import CoinApes from '@/views/CoinApesPage.vue';
import Posts from '@/views/PostsPage.vue';
import Contact from '@/views/ContactPage.vue';
import DevDiaryOne from '@/views//dev-diary/DevDiaryOne.vue';
import DevDiaryTwo from '@/views//dev-diary/DevDiaryTwo.vue';
import DevDiaryThree from '@/views//dev-diary/DevDiaryThree.vue';
import DevDiaryFour from '@/views//dev-diary/DevDiaryFour.vue';
import FireOne from '@/views//fire/FireOne.vue';
import FireTwo from '@/views//fire/FireTwo.vue';
import FireThree from '@/views//fire/FireThree.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsOverview,
    },
    {
      path: '/matchmefy',
      name: 'matchmefy',
      component: Matchmefy,
    },
    {
      path: '/coinapes',
      name: 'coinapes',
      component: CoinApes,
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts,
    },
    {
      path: '/resume',
      name: 'resume',
      component: WorkInProgress,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/posts/dev-diary-1',
      name: 'dev-diary-one',
      component: DevDiaryOne,
    },
    {
      path: '/posts/dev-diary-2',
      name: 'dev-diary-two',
      component: DevDiaryTwo,
    },
    {
      path: '/posts/dev-diary-3',
      name: 'dev-diary-three',
      component: DevDiaryThree,
    },
    {
      path: '/posts/dev-diary-4',
      name: 'dev-diary-four',
      component: DevDiaryFour,
    },
    {
      path: '/posts/fire-1',
      name: 'fire-one',
      component: FireOne,
    },
    {
      path: '/posts/fire-2',
      name: 'fire-two',
      component: FireTwo,
    },
    {
      path: '/posts/fire-3',
      name: 'fire-three',
      component: FireThree,
    },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
});

export default router;
