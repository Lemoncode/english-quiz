export interface Verb {
  infinitive: string;
  past: string;
  participle: string;
  translation: string;
}

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

export interface VerbCorrect {
  infinitive: boolean;
  past: boolean;
  participle: boolean;
  all: boolean;
}

export const createDefaultVerbCorrect = (): VerbCorrect => ({
  infinitive: false,
  past: false,
  participle: false,
  all: false,
});