import * as model from 'core/sentences';
import * as apiModel from './global-sentences.api';

const mapSentenceFromModelToApi = (
  modelSentence: model.SentenceEntityGlobal
): apiModel.SentenceEntityApi => ({ ... modelSentence });

export const mapSentenceCollectionFromModelToApi = (
  modelSentenceList: model.SentenceEntityGlobal[]
): apiModel.SentenceEntityApi[] =>
  Array.isArray(modelSentenceList)
    ? modelSentenceList.map(sentence => mapSentenceFromModelToApi(sentence))
    : [];
