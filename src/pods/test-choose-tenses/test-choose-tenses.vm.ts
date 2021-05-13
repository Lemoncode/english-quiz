export interface VerbQuiz {
  hasInfinitive: boolean;
  infinitive?: string;
  hasPast: boolean;
  past?: string;
  hasParticiple: boolean;
  participle?: string;
}

export const createDefaultVerbQuiz = (): VerbQuiz => ({
  hasInfinitive: false,
  hasPast: false,
  hasParticiple: false,
});
