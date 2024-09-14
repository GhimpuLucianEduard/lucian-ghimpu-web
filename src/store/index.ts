import type { Post } from '@/types/Post';
import { defineStore } from 'pinia';

export type RootState = {
  facts: Array<string>;
  currentFact: string;
  posts: Array<Post>;
  tags: Array<string>;
  highlightedTags: Array<string>;
};

export const useStore = defineStore({
  id: 'store',
  state: () =>
    ({
      currentFact: facts[Math.floor(Math.random() * facts.length)],
      facts: facts,
      highlightedTags: ['Android', 'Compose', 'Dev Diary', 'FIRE', 'Lifestyle', 'Medium'],
      posts: posts,
      tags: Array.from(new Set(posts.flatMap((post) => post.tags))),
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
  '#14 As a kid, I wanted to be a researcher 🔬',
  '#15 I have a pretty good memory 🧠',
  '#16 I love LEGO 🧱',
];

const posts = [
  {
    title: "⚔️ I'm about to wage a SEO War",
    subtitle: 'September 15, 2024 - Reading Time: 3 minutes',
    tags: ['Personal', 'SEO'],
    intro: '',
    link: '/posts/seo-war',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1726323765/lucianghimpu.com/iban/iban-site.png',
    content: `

      <p>
        Recently I build
        <a class="text-indigo underline font-bold" href="https://www.ibangen.io/">wwww.ibangen.io</a>
        - a small website to generate IBANs.
      </p>

      <em>Why?</em>
      `,
  },
  {
    title: 'Vue3 and Cloudinary Integration',
    subtitle: 'August 4, 2024 - Reading Time: 4 minutes',
    tags: ['Vue.js', 'Vue3', 'Medium'],
    intro: 'Improve your website image loading time by 95% in 5 minutes ⚡️',
    link: 'https://medium.com/@lucianghimpu/vue3-and-cloudinary-integration-81dffd486495',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1722774609/lucianghimpu.com/medium/image-load.png',
    content: `
      <p><b>Context</b></p>
      <p>
        Recently I was building a small/medium website that was very heavy on images. 
        So let me tell you a short story about how I <b>improved</b> (and still am) the actual and perceived image load time 📈
      </p>
      `,
  },
  {
    title: '📊 2024 Goals: Mid-Year Update',
    subtitle: 'June 30, 2024 - Reading Time: 5 minutes',
    tags: ['Personal', 'Lifestyle'],
    intro: '',
    link: '/posts/personal-goals-2024-mid-year-update',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1719751390/lucianghimpu.com/2024-goals-mid-update/intro-image.jpg',
    content: `
      <p>
        Ok, so right now probably all companies are doing their mid-year updates, all-hands, OKR reviews, etc. So I thought this would be
        the perfect moment to also do a
        <b>review</b>
        of my goals progress in the past half year.
      </p>

      <p>
        ℹ️ For context, I set some goals ~6 months ago
        <a class="underline text-indigo" href="/posts/personal-goals-2024">here,</a>
        and I tried to also find some metrics to measure my progress.
      </p>

      <p>Fast forward to today, let's see how I did 👀</p>
      `,
  },
  {
    title: 'Navigating the Tech Job Market in Europe: Insights and Tips',
    subtitle: 'April 05, 2024 - Reading Time: 12 minutes',
    tags: ['Android', 'Personal'],
    intro: '',
    link: '/posts/android-interview-guide',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1712331913/lucianghimpu.com/android-interview/post-image.jpg',
    content: `
      <p>
        Recently, I applied for various
        <b class="text-indigo">Android Mid-Senior roles</b>
        in Europe and I ended up joining
        <a class="text-indigo" href="https://qonto.com/en">Qonto</a>
        as a Senior Android Engineer 🎉
      </p>
      `,
  },
  {
    title: 'Per-App Language Preferences in Jetpack Compose',
    subtitle: 'March 27, 2024 - Reading Time: 5 minutes',
    tags: ['Android', 'Compose', 'Medium'],
    intro: '📕 A step-by-step guide to supporting both in-app language picker and per-app language setting in Jetpack Compose.',
    link: 'https://medium.com/@lucianghimpu/per-app-language-preferences-in-jetpack-compose-531f0c8e8440',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1711553472/lucianghimpu.com/medium/language-setting.png',
    content: `
      <p>
        I was working on a project and one of the requirements was to support an in-app language picker. If you are an Android Developer you know this subject always sparks debates.
      </p>

      <em>Why?</em>
      `,
  },
  {
    title: 'Note Taking & Data Tracking: The Endless Quest for the Right Tool',
    subtitle: 'March 18, 2024 - Reading Time: 10 minutes',
    tags: ['Personal', 'Productivity', 'Lifestyle'],
    intro: 'Am I the only one that struggles to find the right all-in-one note taking app?',
    link: '/posts/notes-and-tracking-1',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1710776238/lucianghimpu.com/notes-and-tracking-1/post-image.webp',
    content: `
      <p>
        Ok, so hear me out, for years I've been trying out different solutions for note taking and
        data tracking.
      </p>

      <em>
        Evernote, OneNote, Notion, Apple Notes, Obsidian, Google Sheets, Apple Numbers, etc...
      </em>

      <p>
        And for me, it was always the case that I needed more than one solution to handle all my use
        cases. So, what are my needs?
      </p>
      `,
  },
  {
    title: "I'm About To Start My Own Startup (Maybe?)",
    subtitle: 'February 10, 2024 - Reading Time: 5 minutes',
    tags: ['Startup'],
    intro: 'Ok, so hear me out',
    link: '/posts/law-app-diary-1',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1707599148/lucianghimpu.com/law-app-1/post-image.webp',
    content: `
      <p>
        I came up with what I think is a somewhat useful idea. Now, I don't want to spoil the full
        product. Not that I'm afraid someone will steal it, but I kinda like not disclosing it,
        makes me feel like I'm working on something big
        <i>(it's not).</i>
        I'll give some details though:
      </p>

      <em>It's related to law and law firms 👨‍⚖️</em>
      `,
  },
  {
    title: 'Aliens, Airplanes and Spreadsheets - Part 3',
    subtitle: 'January 28, 2024 - Reading Time: 11 minutes',
    tags: ['FIRE', 'Books'],
    intro: '"Progress happens too slowly to notice, but setbacks happen too quickly to ignore."',
    link: '/posts/fire-8',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1704906359/lucianghimpu.com/fire-8/post-image.png',
    content: `
      <p>
        So here we are in the final third of the amazing book:
        <a class="text-indigo italic" href="https://amzn.to/3TSKf0g">
          "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness"
        </a>
        by the author,
        <em>Morgan Housel.</em>
        I've already reviewed the first two-thirds of the book, which you can find here:
      </p>
      <ol>
        <li>
          <a class="text-indigo" href="/posts/fire-6">It's Not Just About Spreadsheets - Part 1</a>
        </li>
        <li>
          <a class="text-indigo" href="/posts/fire-7">
            You're Not a Spreadsheet. You're a Person - Part 2
          </a>
        </li>
      </ol>
      `,
  },
  {
    title: 'Code TextField in Jetpack Compose 🔐',
    subtitle: 'Jan 25, 2024 - Reading Time: 3 minutes',
    tags: ['Android', 'Compose', 'Medium'],
    intro: 'A Component for 2FA-Style Input Texts',
    link: 'https://medium.com/p/32e9bc07b8e9',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1711553479/lucianghimpu.com/medium/code-text-field.webp',
    content: `
      <p>
        Recently I've started working on a side project 🧑🏻‍💻

        I'll not bore you with the details, but one of the screens I was working on required a sort of CodeTextField. As the name implies, it’s an input field for codes. Think of those auth codes apps used to confirm your identity via 2FA. In my app, it’s not for 2FA, but for granting access to a game lobby.
      </p>
      `,
  },
  {
    title: "You're not a spreadsheet. You're a person - Part 2",
    subtitle: 'January 19, 2024 - Reading Time: 7 minutes',
    tags: ['FIRE', 'Books'],
    intro: "If I had to be a spreadsheet, I would be a Google Sheet; because I'm always in the cloud ☁️",
    link: '/posts/fire-7',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1704906359/lucianghimpu.com/fire-7/post-image.png',
    content: `
      <p>I'm sorry for the joke 🫠</p>
      <p>
        In my previous post, I reviewed some of the concepts presented in
        <a class="text-indigo italic" href="https://amzn.to/3TSKf0g">
          "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness"
        </a>
        &nbsp; by the insightful author,
        <em>Morgan Housel.</em>
      </p>

      <p>
        Today, we're picking up where we left off, exploring the next segment of the book. We will
        take us have a look at themes such as freedom, saving, surprises, and much more 👀
      </p>
      `,
  },
  {
    title: "It's Not Just About Spreadsheets - Part 1",
    subtitle: 'January 10, 2024 - Reading Time: 8 minutes',
    tags: ['FIRE', 'Books'],
    intro: 'I picked up a new book over the weekend, and surprisingly, I got hooked on it!',
    link: '/posts/fire-6',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1704906359/lucianghimpu.com/fire-6/post-image.png',
    content: `
      <p>
        The book is
        <a class="text-indigo italic" href="https://amzn.to/3TSKf0g">
          "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness"
        </a>
        &nbsp; by
        <em>Morgan Housel.</em>
      </p>
      <p>
        Honestly, I usually have a hard time getting into books about investments or economics. But
        to my surprise, this one really captivated me 👀
      </p>
      `,
  },
  {
    title: 'WebSocket in Android using callbackFlow - Dev Diary #5',
    subtitle: 'January 04, 2024 • Reading Time: 12 minutes',
    tags: ['Android', 'WebSockets', 'Dev Diary'],
    intro: "It's been a while since my latest update 🫠",
    link: '/posts/dev-diary-5',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1704397303/lucianghimpu.com/dev-diary-5/post-image.png',
    content: `
      <p>
        Truth be told, I had time to work on the app, but I just didn't feel like it. So, no smart
        excuses here. However, I recently got back to it and had some fun with
        <b>WebSockets</b>
        in Android.
      </p>
    `,
  },
  {
    title: 'I Reached $100k - End of the Year Report',
    subtitle: 'December 31, 2023 - Reading Time: 7 minutes',
    tags: ['FIRE'],
    intro: 'This year, I reached an important milestone: $100k net worth 🎉',
    link: '/posts/fire-5',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1704007354/lucianghimpu.com/fire-5/post-image.png',
    content: `
      <p>
        <b>⚠️ DISCLAIMER:</b>
        <em>
          My aim is not to boast. I believe that if I'm going to write about FIRE, investments, and
          money on the internet, I owe it to my readers to be somewhat transparent about my own
          finances.
        </em>
      </p>
      `,
  },
  {
    title: '2024 Goals: A Balanced Mix of Finance, Fitness, and Creativity',
    subtitle: 'December 21, 2023 - Reading Time: 6 minutes',
    tags: ['Personal', 'Lifestyle'],
    intro: "Time for some concrete goals, don't you think? 🫡",
    link: '/posts/personal-goals-2024',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1703185637/lucianghimpu.com/blog-generic/2024-goals-image.png',
    content: `
      <p>
        I'm a numbers guy, so this year I decided to have my 2024 goals backed by actual numbers.
        Essentially, I've tried to find concrete metrics to measure my progress throughout the year.
      </p>

      <p>Here's a sneak peek of the end result:</p>
      `,
  },
  {
    title: 'Fall seven times, rise eight - the 10 rules of ikigai',
    subtitle: 'December 14, 2023 - Reading Time: 7 minutes',
    tags: ['FIRE', 'Books'],
    intro: 'I continued to reflect on my Ikigai 🤔',
    link: '/posts/fire-4',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1702576287/lucianghimpu.com/fire-4/fire-4.png',
    content: `
      <p>
        As I mentioned in the
        <a class="text-indigo" href="/posts/fire-3">previous post,</a>
        to set some FIRE goals, it was essential for me to define my Ikigai, or at least have a
        rough idea of the direction I'm heading in.
      </p>

      <p>
        To this end, I began reading a book about Ikigai. Having finished it, I discovered that the
        second part of the book focuses on
        <em>resilience, stoicism, negative visualization, and similar concepts.</em>
      </p>
      `,
  },
  {
    title: 'Ikigai, FIRE and Studio Ghibli',
    subtitle: 'December 03, 2023 - Reading Time: 7 minutes',
    tags: ['FIRE', 'Books'],
    intro: 'About three years ago, I learned about the Japanese concept of IKIGAI 🇯🇵',
    link: '/posts/fire-3',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1700523231/lucianghimpu.com/fire-3/post.png',
    content: `
      <p>
        It was quite random actually. My colleague and manager at the time,
        <a class="text-indigo" href="https://www.linkedin.com/in/mihaituhari/">@MihaiTuhari,</a>
        was sharing his screen, and in his bookmarks, I noticed one named
        <em>Ikigai.</em>
        I believe that to this day, he still has that bookmark 👀
      </p>
      <p>I was quite intrigued, so I looked it up. It's a very simple concept:</p>
      `,
  },
  {
    title: 'Tai Lopez, Silviu Faiar and why you should invest',
    subtitle: 'November 27, 2023 - Reading Time: 8 minutes',
    tags: ['FIRE'],
    intro: 'Have you started investing yet? 🫡',
    link: '/posts/fire-2',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1700523231/lucianghimpu.com/fire-2/fire-two.png',
    content: `
      <p>
        In the
        <a class="text-indigo" href="posts/fire-1">last post,</a> I told you the story of Romania in the early 2000s and how it shaped my FIRE view today.
      </p>

      <p>
        Now, with this post, I'm heading in a different direction, exploring the current events and
        situations in Romania.
      </p>

      <p>
        In particular, a
        <a class="text-indigo" href="https://www.youtube.com/watch?v=m7J2T3wJJSI">mockumentary</a>
        that was released recently.
      </p>
      `,
  },
  {
    title: "From Romania's Revolution to FIRE: A Legacy of Change",
    subtitle: 'November 20, 2023 - Reading Time: 8 minutes',
    tags: ['FIRE'],
    intro: 'Have you ever heard about FIRE and the 4% rule? 👀',
    link: '/posts/fire-1',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1700523231/lucianghimpu.com/fire-1/fire-one.png',
    content: `
      <p>
        Well, if you're in the tech bubble, you probably have. But for those unfamiliar, FIRE
        essentially stands for
        <em>“Financial Independence, Retire Early”</em>
        . As for the 4% rule, let me quote from
        <a class="text-indigo" href="https://www.investopedia.com/terms/f/four-percent-rule.asp">
          Investopedia:
        </a>
      </p>
      `,
  },
  {
    title: 'Implementing a code text field in Android - Dev Diary #4',
    subtitle: 'November 2, 2023 • Reading Time: 6 minutes',
    tags: ['Android', 'Compose', 'Dev Diary'],
    intro: '📲 Next up: the Android Project',
    link: '/posts/dev-diary-4',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1698934984/lucianghimpu.com/dev-diary-4/intro.png',
    content: `
      <p>
        Just like I mentioned in my previous dev diary entry, I'm taking a top-down approach. So,
        I've started things off by bootstrapping the Android app 🫡
        <br />
        Ideally, this is supposed to be the
        <em>"easy"</em>
        part, especially since I've been working with Android professionally for some time.
      </p>

      <p>
        And so far, it's been pretty straightforward. I've set up the project, tossed in the
        dependencies, sorted out the basic navigation, helpers, and so on...
      </p>

      <em>Here's a quick demo 👀</em>
      `,
  },
  {
    title: 'Jetpack Compose: Tips & Tricks from Our Android App Migration',
    subtitle: 'October 9, 2023 • Reading Time: 8 minutes',
    tags: ['Android', 'Compose', 'Kotlin'],
    intro: '🎯 A Big Milestone',
    link: 'https://tech.everli.com/2023/10/09/jetpack-compose-tips-tricks-from-our-android-app-migration/',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1698934295/calltoaction.png',
    content: `
      <p>
        Over the recent weeks, we have celebrated an important transition in our Android Customer App. 
        We completed the migration of all our <b>Widgets</b> to Jetpack Compose.
      </p>  
      `,
  },
  {
    title: 'Took a break - Figma - Dev Diary #3',
    subtitle: 'September 16, 2023 • Reading Time: 6 minutes',
    tags: ['Figma', 'UI/UX', 'Dev Diary'],
    intro: '🍝 Pasta, Wine and Figma',
    link: '/posts/dev-diary-3',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-3/dev-diary-3.png',
    content: `
      <p>
        It feels like forever since my last dev diary entry. That's because I hit pause on
        everything to take a refreshing break. I ventured out to the enchanting 🇮🇹
        <b>Puglia</b>
        for a vacation, and what a journey that was!
      </p>

      <p>Fast forward a month, and here I am, penning down a fresh entry for my dev diary.</p>

      <em>Yet, with not so much progress to report...</em>
      `,
  },
  {
    title: 'Do I need a DB? - Dev Diary #2',
    subtitle: 'August 18, 2023 • Reading Time: 6 minutes',
    tags: ['Node.js', 'WebSockets', 'Dev Diary'],
    intro: '📆 Past Week Progress',
    link: '/posts/dev-diary-2',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-2/dev-diary-2.png',
    content: `
    <p>
        Last week, I dove deep into the backend part, and it's shaping up quite nicely. We've got
        the basics down: logging, error management, basic API responses, and a sprinkle of game
        lobby logic.
      </p>

      <p>
        BUT most important:
        <em><b>I decided to not use a Database</b></em>
      </p>

      <em>Wait, what?</em>
      `,
  },
  {
    title: 'Treachery App - Dev Diary #1',
    subtitle: 'August 12, 2023 • Reading Time: 5 minutes',
    tags: ['Node.js', 'WebSockets', 'Dev Diary'],
    intro: '👀 Where Did My Motivation Go?',
    link: '/posts/dev-diary-1',
    image: 'https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-1/dev-diary-1.png',
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
    tags: ['Kotlin', 'Kotest', 'Gradle', 'Medium'],
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
    tags: ['Vue.js', 'Vue3', 'GTM', 'Medium'],
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
