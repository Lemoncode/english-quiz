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

export const emptySentence = (): SentenceEntityVm => ({
  prefixSentence: '',
  sufixSentence: '',
  rightAnswer: 'Present',
  present: '',
  past: '',
  participle: '',
  translation: '',
});
