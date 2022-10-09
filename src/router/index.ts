import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import WorkInProgress from '../views/WorkInProgress.vue';
import NotFound from '../views/NotFound.vue';
import ProjectsOverview from '@/views/ProjectsOverview.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/posts',
      name: 'posts',
      component: WorkInProgress,
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
