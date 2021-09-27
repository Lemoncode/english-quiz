import { SentenceEntityApi } from 'core/sentences';
import { SentenceEntityVm, emptySentence } from './test-sentences.vm';
import * as verbApi from 'core/verbs/global-verbs.api';
import { splitSentence } from './test-sentences.business';
import { TensesEntityApi } from 'core/sentences';

const isAllDataInformed = (
  sentenceEntityApi: SentenceEntityApi,
  verbCollection: verbApi.VerbEntityApi[]
) =>
  sentenceEntityApi !== null &&
  sentenceEntityApi !== undefined &&
  Array.isArray(verbCollection);

const getRightAnswerStandardCase = (
  rightAnswer: TensesEntityApi,
  verb: verbApi.VerbEntityApi
) => {
  switch (rightAnswer) {
    case 'Present':
      return verb.infinitive;
    case 'Past':
      return verb.past;
    case 'Participle':
      return verb.participle;
    default:
      return '';
  }
};

const getRightTextAnswer = (
  sentence: SentenceEntityApi,
  verb: verbApi.VerbEntityApi
) =>
  sentence.thirdPerson
    ? sentence.thirdPerson
    : getRightAnswerStandardCase(sentence.rightAnswer, verb);

export const mapFromSentenceApiToSentenceVm = (
  sentenceEntityApi: SentenceEntityApi,
  verbCollection: verbApi.VerbEntityApi[]
): SentenceEntityVm => {
  if (isAllDataInformed(sentenceEntityApi, verbCollection)) {
    const [prefixSentence, sufixSentence] = splitSentence(
      sentenceEntityApi.sentence
    );
    const verbWithTenses: verbApi.VerbEntityApi = verbCollection.find(
      verb => verb.infinitive === sentenceEntityApi.verb
    );

    return {
      prefixSentence: prefixSentence,
      sufixSentence: sufixSentence,
      rightTenseAnswer: sentenceEntityApi.rightAnswer,
      rightTextAnswer: getRightTextAnswer(sentenceEntityApi, verbWithTenses),
      present: verbWithTenses.infinitive,
      past: verbWithTenses.past,
      participle: verbWithTenses.participle,
      translation: verbWithTenses.translation,
    };
  } else return emptySentence();
};
