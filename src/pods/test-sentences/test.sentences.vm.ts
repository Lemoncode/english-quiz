type TensesViewModel = 'Present' | 'Past' | 'Participle';

export interface SentenceEntityVm {
  prefixSentence: string;
  sufixSentence: string;
  rightAnswer: TensesViewModel;
  present: string;
  past: string;
  participle: string;
  translation: string;
}

