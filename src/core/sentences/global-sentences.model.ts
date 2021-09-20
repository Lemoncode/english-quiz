type TensesEntityGlobal = 'Present' | 'Past' | 'Participle';

export interface SentenceEntityGlobal {
  verb: string;
  sentence: string;
  rigthAnswer: TensesEntityGlobal;
}
