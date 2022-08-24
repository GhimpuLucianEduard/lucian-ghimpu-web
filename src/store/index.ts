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
  "#2 I'm a dimir player 🔵⚫",
  '#3 This is a long fact to test on small devices how it will look like 📱',
  '#4 I eat oatmeal everyday 🥣',
  '#5 There are more than #1392 facts, keep shuffling!',
];
