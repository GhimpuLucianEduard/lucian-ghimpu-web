import { defineStore } from 'pinia';

export type RootState = {
  facts: Array<string>;
  currentFact: string;
};

export const useStore = defineStore({
  id: 'store',
  state: () =>
    ({
      facts: facts,
      currentFact: facts[Math.floor(Math.random() * facts.length)],
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
  "#10 I'm an Apple fan boy 😬",
  "#11 I'm pretty well known for making above average memes 🥹",
  '#12 I lived in italy for 10 years, my entire childhood 🇮🇹',
  "#13 I'm pretty sure I can eat an infinite amount of Sushi 🍣",
];
