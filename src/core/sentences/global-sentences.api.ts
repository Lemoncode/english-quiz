import { defaultSentences } from './global-sentences.storage';
import { mapSentenceCollectionFromApiToVm } from './global-sentences.api.vm';

export interface SentenceEntityApi {
  verb: string;
  sentence: string;
  rigthAnswer: string;
}

export const loadFullSentencesCollection = async (): Promise<SentenceEntityApi[]> =>
  Promise.resolve(mapSentenceCollectionFromApiToVm(defaultSentences));
