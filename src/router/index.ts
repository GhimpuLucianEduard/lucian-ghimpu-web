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
import DevDiaryFive from '@/views//dev-diary/DevDiaryFive.vue';
import FireOne from '@/views//fire/FireOne.vue';
import FireTwo from '@/views//fire/FireTwo.vue';
import FireThree from '@/views//fire/FireThree.vue';
import FireFour from '@/views//fire/FireFour.vue';
import FireFive from '@/views//fire/FireFive.vue';
import FireSix from '@/views//fire/FireSix.vue';
import FireSeven from '@/views//fire/FireSeven.vue';
import FireEight from '@/views/fire/FireEight.vue';
import PersonalGoals2024 from '@/views/blog/PersonalGoals2024.vue';
import NotesAndTracking1 from '@/views/blog/NotesAndTracking1.vue';
import CookiePolicyPageVue from '@/views/CookiePolicyPage.vue';
import PrivacyPolicyPageVue from '@/views/PrivacyPolicyPage.vue';
import TermsOfUsePageVue from '@/views/TermsOfUsePage.vue';
import LawAppDiaryOneVue from '@/views/law-app-diary/LawAppDiaryOne.vue';
import AndroidInterviewGuide from '@/views/blog/AndroidInterviewGuide.vue';
import PersonalGoals2024MidYearUpdate from "@/views/blog/PersonalGoals2024MidYearUpdate.vue";
import SeoWar from '@/views/iban/SeoWar.vue';
import IbanGen from "@/views/projects/IbanGenPage.vue";
import Goals2025 from "@/views/blog/Goals2025.vue";

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
      path: '/cookie-policy',
      name: 'cookie-policy',
      component: CookiePolicyPageVue,
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyPageVue,
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      component: TermsOfUsePageVue,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsOverview,
    },
    {
      path: '/ibangen',
      name: 'ibangen',
      component: IbanGen,
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
      path: '/posts/dev-diary-5',
      name: 'dev-diary-five',
      component: DevDiaryFive,
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
    {
      path: '/posts/fire-4',
      name: 'fire-four',
      component: FireFour,
    },
    {
      path: '/posts/fire-5',
      name: 'fire-five',
      component: FireFive,
    },
    {
      path: '/posts/fire-6',
      name: 'fire-six',
      component: FireSix,
    },
    {
      path: '/posts/fire-7',
      name: 'fire-seven',
      component: FireSeven,
    },
    {
      path: '/posts/fire-8',
      name: 'fire-eight',
      component: FireEight,
    },
    {
      path: '/posts/personal-goals-2024',
      name: 'personal-goals-2024',
      component: PersonalGoals2024,
    },
    {
      path: '/posts/notes-and-tracking-1',
      name: 'notes-and-tracking-1',
      component: NotesAndTracking1,
    },
    {
      path: '/posts/law-app-diary-1',
      name: 'law-app-diary-1',
      component: LawAppDiaryOneVue,
    },
    {
      path: '/posts/android-interview-guide',
      name: 'android-interview-guide',
      component: AndroidInterviewGuide,
    },
    {
      path: '/posts/personal-goals-2024-mid-year-update',
      name: 'personal-goals-2024-mid-year-update',
      component: PersonalGoals2024MidYearUpdate,
    },
    {
      path: '/posts/seo-war',
      name: 'seo-war',
      component: SeoWar,
    },
    {
      path: '/posts/personal-goals-2025',
      name: 'goals-2025',
      component: Goals2025,
    },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
});

export default router;
