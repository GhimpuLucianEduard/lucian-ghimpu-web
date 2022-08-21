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

const facts = ['#1 I hate Java', "#2 I'm a dimir player"];
