import { SentenceEntityApi } from 'core/sentences';
import { SentenceEntityVm, emptySentence } from './test-sentences.vm';
import * as verbApi from 'core/verbs/global-verbs.api';
import { splitSentence } from './test-sentences.business';
import { TensesEntityApi } from 'core/sentences';

const isAllDataInformed = (
  sentenceEntityApi: SentenceEntityApi,
  verbSelected: verbApi.VerbEntityApi
): boolean =>
  sentenceEntityApi !== null &&
  sentenceEntityApi !== undefined &&
  Object.keys(verbSelected).length > 0;

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
  sentence.specialForm
    ? sentence.specialForm
    : getRightAnswerStandardCase(sentence.rightAnswer, verb);

export const mapFromSentenceApiToSentenceVm = (
  sentenceEntityApi: SentenceEntityApi,
  verbSelected: verbApi.VerbEntityApi
): SentenceEntityVm => {
  if (isAllDataInformed(sentenceEntityApi, verbSelected)) {
    const [prefixSentence, sufixSentence] = splitSentence(
      sentenceEntityApi.sentence
    );

    return {
      prefixSentence: prefixSentence,
      sufixSentence: sufixSentence,
      rightTenseAnswer: sentenceEntityApi.rightAnswer,
      rightTextAnswer: getRightTextAnswer(sentenceEntityApi, verbSelected),
      present: verbSelected.infinitive,
      past: verbSelected.past,
      participle: verbSelected.participle,
      translation: verbSelected.translation,
    };
  } else return emptySentence();
};
