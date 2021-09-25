type TensesEntityGlobal = 'Present' | 'Past' | 'Participle';

export interface SentenceEntityGlobal {
  verb: string;
  sentence: string;
  rightAnswer: TensesEntityGlobal;
  thirdPerson?: string;
}
