import * as sentenceApi from 'core/sentences';
import * as sentenceVm from './test.sentences.vm';
import * as verbApi from 'core/verbs/global-verbs.api';
import { splitSentence } from './test-sentences.business';

export const mapFromSentenceApiToSentenceVm = (
  sentenceApi: sentenceApi.SentenceEntityApi,
  verbApi: verbApi.VerbEntityApi
): sentenceVm.SentenceEntityVm => {
  return sentenceApi
    ? {
        prefixSentence: splitSentence(sentenceApi.sentence)[0],
        sufixSentence: splitSentence(sentenceApi.sentence)[1],
        rightAnswer: sentenceApi.rigthAnswer,
        present: verbApi.infinitive,
        past: verbApi.past,
        participle: verbApi.participle,
        translation: verbApi.translation,
      }
    : sentenceVm.emptySentence();
};
