import * as sentenceApi from 'core/sentences';
import * as sentenceVm from './test.sentences.vm';
import * as verbApi from 'core/verbs/global-verbs.api';
import { splitSentence } from './test-sentences.business';

export const mapFromSentenceApiToSentenceVm = (
  sentenceEntityApi: sentenceApi.SentenceEntityApi,
  verbCollection: verbApi.VerbEntityApi[]
): sentenceVm.SentenceEntityVm => {
  if (sentenceEntityApi && Array.isArray(verbCollection)) {
    const [prefixSentence, sufixSentence] = splitSentence(
      sentenceEntityApi.sentence
    );
    const verbWithTenses: verbApi.VerbEntityApi = verbCollection.find(
      verb => verb.infinitive === sentenceEntityApi.verb
    );

    return {
      prefixSentence: prefixSentence,
      sufixSentence: sufixSentence,
      rightAnswer: sentenceEntityApi.rightAnswer,
      present: verbWithTenses.infinitive,
      past: verbWithTenses.past,
      participle: verbWithTenses.participle,
      translation: verbWithTenses.translation,
    };
  } else return sentenceVm.emptySentence();
};
