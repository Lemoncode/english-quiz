export enum VerbTenses {
  infinitive,
  past,
  participle,
}

export interface VerbQuiz {
  response: string;
  tense: VerbTenses;
}

const getRandomTense = (): VerbTenses => {
  const rnd = Math.floor(Math.random() * 3);
  return rnd === 0
    ? VerbTenses.infinitive
    : rnd === 1
    ? VerbTenses.past
    : VerbTenses.participle;
};

export const createDefaultVerbQuiz = (): VerbQuiz => ({
  response: '',
  tense: getRandomTense(),
});
