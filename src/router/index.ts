import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import WorkInProgress from '../views/WorkInProgress.vue';
import NotFound from '../views/NotFound.vue';
import ProjectsOverview from '@/views/ProjectsOverview.vue';
import Matchmefy from '@/views/MatchmefyPage.vue';
import CoinApes from '@/views/CoinApesPage.vue';
import Posts from '@/views/PostsPage.vue';

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
      component: WorkInProgress,
    },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
});

export default router;
