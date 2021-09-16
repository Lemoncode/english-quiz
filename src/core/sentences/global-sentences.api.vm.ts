import * as vm from 'core/sentences';
import * as api from './global-sentences.api';

const mapSentenceFromApiToVm = (
  apiEntry: api.SentenceEntityApi
): vm.SentenceEntityGlobal => ({ ...apiEntry });

export const mapSentenceCollectionFromApiToVm = (
  apiSentenceCollection: api.SentenceEntityApi[]
): vm.SentenceEntityGlobal[] =>
  apiSentenceCollection.map(mapSentenceFromApiToVm);

