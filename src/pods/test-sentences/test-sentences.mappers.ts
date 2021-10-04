import { SentenceEntityApi } from 'core/sentences';
import { SentenceEntityVm, emptySentence } from './test-sentences.vm';
import * as verbApi from 'core/verbs/global-verbs.api';
import { TensesEntityApi } from 'core/sentences';
import { VerbEntityGlobal } from 'core/verbs';
import {
  splitSentence,
  pickRandomVerb,
  pickRandomSentence,
} from './test-sentences.business';

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

const areParametersInformed = (
  sentencesCollection: SentenceEntityApi[],
  selectedVerbs: string[],
  verbCollection: VerbEntityGlobal[]
): boolean =>
  Array.isArray(sentencesCollection) &&
  Array.isArray(selectedVerbs) &&
  Array.isArray(verbCollection);

export const sentencesWithVerb = (
  sentencesCollection: SentenceEntityApi[],
  selectedVerbs: string[],
  verbCollection: VerbEntityGlobal[]
) => {
  let randomVerb: VerbEntityGlobal = {
    infinitive: '',
    past: '',
    participle: '',
    translation: '',
  };
  let sentencesWithVerbSelected: SentenceEntityApi[] = [];
  if (
    areParametersInformed(sentencesCollection, selectedVerbs, verbCollection)
  ) {
    do {
      randomVerb = pickRandomVerb(selectedVerbs, verbCollection);
      sentencesWithVerbSelected = sentencesCollection.filter(
        sentence => sentence.verb === randomVerb.infinitive
      );
    } while (sentencesWithVerbSelected === []);
    return { randomVerb, sentencesWithVerbSelected };
  }
  return { randomVerb, sentencesWithVerbSelected };
};

const isAllMapDataCorrect = (
  sentencesCollection: SentenceEntityApi[],
  selectedVerbs: string[],
  verbCollection: VerbEntityGlobal[]
): boolean =>
  Array.isArray(sentencesCollection) &&
  sentencesCollection.length > 0 &&
  Array.isArray(selectedVerbs) &&
  selectedVerbs.length > 0 &&
  Array.isArray(verbCollection) &&
  verbCollection.length > 0;

export const mapRandomSentence = (
  sentencesCollection: SentenceEntityApi[],
  selectedVerbs: string[],
  verbCollection: VerbEntityGlobal[]
): SentenceEntityVm => {
  if (isAllMapDataCorrect(sentencesCollection, selectedVerbs, verbCollection)) {
    const { randomVerb, sentencesWithVerbSelected } = sentencesWithVerb(
      sentencesCollection,
      selectedVerbs,
      verbCollection
    );
    const randomSentenceWithVerbSelected = pickRandomSentence(
      sentencesWithVerbSelected
    );

    return mapFromSentenceApiToSentenceVm(
      randomSentenceWithVerbSelected,
      randomVerb
    );
  }

  return emptySentence();
};
