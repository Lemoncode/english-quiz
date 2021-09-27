type TensesViewModel = 'Present' | 'Past' | 'Participle';

export enum QuestionStatus {
  notAnsweredYet,
  correct,
  incorrect,
}

export interface SentenceEntityVm {
  prefixSentence: string;
  sufixSentence: string;
  rightTenseAnswer: TensesViewModel;
  rightTextAnswer: string;
  present: string;
  past: string;
  participle: string;
  translation: string;
}

export const emptySentence = (): SentenceEntityVm => ({
  prefixSentence: '',
  sufixSentence: '',
  rightTenseAnswer: 'Present',
  rightTextAnswer: '',
  present: '',
  past: '',
  participle: '',
  translation: '',
});