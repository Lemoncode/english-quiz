import { SentenceEntityApi } from 'core/sentences';
import { SentenceEntityVm, emptySentence } from './test.sentences.vm';
import * as verbApi from 'core/verbs/global-verbs.api';
import { splitSentence } from './test-sentences.business';

export const mapFromSentenceApiToSentenceVm = (
  sentenceEntityApi: SentenceEntityApi,
  verbCollection: verbApi.VerbEntityApi[]
): SentenceEntityVm => {
  if (
    sentenceEntityApi !== null &&
    sentenceEntityApi !== undefined &&
    Array.isArray(verbCollection)
  ) {
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
  } else return emptySentence();
};
