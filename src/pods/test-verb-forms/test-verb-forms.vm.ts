export interface VerbQuiz {
  infinitive: string;
  past: string;
  participle: string;
}

export const createDefaultVerbQuiz = (): VerbQuiz => ({
  infinitive: '',
  past: '',
  participle: '',
});
