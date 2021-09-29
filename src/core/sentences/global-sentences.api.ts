import { defaultSentences } from './global-sentences.storage';
import { mapSentenceCollectionFromModelToApi } from './global-sentences.api.mappers';

export type TensesEntityApi = 'Present' | 'Past' | 'Participle';

export interface SentenceEntityApi {
  verb: string;
  sentence: string;
  rightAnswer: TensesEntityApi;
  specialForm?: string;
}

export const loadFullSentencesCollection = async (): Promise<SentenceEntityApi[]> => {
  try {
    return await mapSentenceCollectionFromModelToApi(defaultSentences);
  } catch (error) {
    console.error(error);
  }
};
