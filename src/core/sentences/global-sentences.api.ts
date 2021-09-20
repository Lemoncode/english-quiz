import { defaultSentences } from './global-sentences.storage';
import { mapSentenceCollectionFromModelToApi } from './global-sentences.api.vm';

export interface SentenceEntityApi {
  verb: string;
  sentence: string;
  rigthAnswer: string;
}

export const loadFullSentencesCollection = async (): Promise<SentenceEntityApi[]> => {
  try {
    return await mapSentenceCollectionFromModelToApi(defaultSentences);
  } catch (error) {
    console.error(error);
  }
};
