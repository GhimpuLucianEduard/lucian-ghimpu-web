import type { Post } from '@/types/Post';
import { defineStore } from 'pinia';

export type RootState = {
  facts: Array<string>;
  currentFact: string;
  posts: Array<Post>;
};

export const useStore = defineStore({
  id: 'store',
  state: () =>
    ({
      facts: facts,
      currentFact: facts[Math.floor(Math.random() * facts.length)],
      posts: posts,
    } as RootState),
  actions: {
    randomizeFact() {
      this.currentFact = facts[Math.floor(Math.random() * facts.length)];
    },
  },
});

const facts = [
  '#1 I kinda dislike Java ☕',
  "#2 I'm a Dimir player 🔵⚫",
  '#3 This is a long fact to test on small devices how it will look like 📱',
  '#4 I eat oatmeal everyday 🥣',
  '#5 There are more than #1492 facts, keep shuffling!',
  '#6 My favorite gym day is pull day 💪',
  '#7 I read a lot of Science Fiction 🛸',
  '#8 My favorite design pattern is the Strategy Pattern 📐',
  '#9 Although I never used it professionally, I enjoy Python a lot 🐍',
  "#10 I'm an Apple fan boy 🍎",
  "#11 I'm pretty well known for making above average memes 🥹",
  '#12 I lived in italy for 10 years, my entire childhood 🇮🇹',
  "#13 I'm pretty sure I can eat an infinite amount of Sushi 🍣",
];

const posts = [
  {
    title: 'Do I need a DB? - Dev Diary #2',
    subtitle: 'August 18, 2023 • Reading Time: 5 minutes',
    tags: ['Node.js', 'WebSockets', 'Dev Diary'],
    intro: 'This is a test intro',
    link: '/posts/dev-diary-2',
    image:
      'https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-2/dev-diary-2.png',
    content: `
    <p>
        WIP
    </p>
    </br>
    <p>
      <em>So, the big question - why?</em>
    </p>`,
  },
  {
    title: 'Treachery App - Dev Diary #1',
    subtitle: 'August 12, 2023 • Reading Time: 5 minutes',
    tags: ['Node.js', 'WebSockets', 'Dev Diary'],
    intro: '👀 Where Did My Motivation Go?',
    link: '/posts/dev-diary-1',
    image:
      'https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-1/dev-diary-1.png',
    content: `
    <p>
        Over the past months, I've hit several roadblocks trying to kick off, maintain, or wrap up
        personal projects. Whether it's diving into a new tech topic, experimenting with a mini-app,
        or crafting a fully fleshed-out product, the motivation just wasn't there.
    </p>
    </br>
    <p>
      <em>So, the big question - why?</em>
    </p>`,
  },
  {
    title: 'Modifiers and Extensions – The Compose Migration Continues',
    subtitle: 'November 17, 2022 • Reading Time: 6 minutes',
    tags: ['Android', 'Compose', 'Kotlin'],
    intro: 'A little bit of context',
    link: 'https://tech.everli.com/2022/11/17/modifiers-and-extensions-the-compose-migration-continues/',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1692309102/post-preview-4.webp',
    content: `
    <p>
      In the last couple of months, we've been busy playing around with
      <b>Jetpack Compose</b>. We had some challenges here and there in the migration, and it's still a work in progress 🚧
    </p>
    </br>
    <p>
      But this post is more about the fun part of Compose:
      <b>MODIFIERS!!!!</b>
      <i>(and more)</i>
    </p>`,
  },
  {
    title: 'Design System Android – A Problematic Situation',
    subtitle: 'July 27, 2022 • Reading Time: 5 minutes',
    tags: ['Android', 'Compose', 'Kotlin'],
    intro: 'Prologue',
    link: 'https://tech.everli.com/2022/07/27/design-system-android-a-problematic-situation/',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1692309102/post-preview-3.webp',
    content: `    
    <p>
      Picture this: you are an
      <b>Android dev</b>
      , and a new feature needs to be implemented. It's a small screen, fairly straightforward
      layout, some inputs, nothing fancy. And here you are, on one screen you got the
      <b>Figma</b>
      document open, in the other screen your IDE. You see this new button, seems a little bit
      larger than what you have in the rest of the app. It's probably just a minor mistake on the
      designer's part. You decide to use the regular size for the button.
    </p>
    </br>
    <p><i>And here's where the fun begins.</i></p>
    `,
  },
  {
    title: 'Kotlin Multiplatform library with Kotest and Gradle Version Catalog',
    subtitle: 'January 23, 2022 • Reading Time: 6 minutes',
    tags: ['Kotlin', 'Kotest', 'Gradle'],
    intro: 'Spice up the default Kotlin Multiplatform project 🌶',
    link: 'https://medium.com/dev-genius/kotlin-multiplatform-library-with-kotest-and-gradle-version-catalog-23861a6f1bb1',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1692309102/post-preview-2.webp',
    content: `
    <p>
      Recently I've started a side project to build a library in Kotlin. Then I wondered, why not
      use
      <b>Kotlin Multiplatform?</b>
    </p>
    </br>
    <p>
      So I started looking into that, and as a very responsible developer, I wanted to include
      <b>Kotest</b>

      as my testing framework of choice. Now, you might wonder:
      <i>
        “hey Lucian, why struggle to replace the default testing framework, Kotlin Test, with
        Kotest?
      </i>
      🤔
    </p>
    `,
  },
  {
    title: 'Setting up Google Analytics and cookie policy in Vue.js',
    subtitle: 'July 25, 2021 • Reading Time: 4 minutes',
    tags: ['Vue.js', 'Vue3', 'GTM'],
    intro: 'A clean and fast approach using the Composition API 🍪',
    link: 'https://medium.com/@lucianghimpu/every-time-i-am-ready-to-release-a-website-app-i-face-the-tedious-task-of-setting-up-google-f36052d3b21e',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1692309102/post-preview-1.webp',
    content: `    
    <p>
      Every time I am ready to release a website/app, I face the tedious task of setting up Google
      Analytics and a cookie policy for it . Now, I’m going to try to make your life a little bit
      easier with the following guide.
    </p>
    `,
  },
];
