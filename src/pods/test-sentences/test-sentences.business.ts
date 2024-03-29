import { SentenceEntityApi } from 'core/sentences';
import { VerbEntityApi } from 'core/verbs/global-verbs.api';
import { VerbEntityGlobal } from 'core/verbs';

export const pickRandomSentence = (
  sentenceCollection: SentenceEntityApi[]
): SentenceEntityApi => {
  if (Array.isArray(sentenceCollection) && sentenceCollection.length > 0) {
    const sentenceCollectionLength = sentenceCollection.length;
    const index = Math.floor(Math.random() * sentenceCollectionLength);

    return sentenceCollection[index];
  }
  return {
    verb: '',
    sentence: '',
    rightAnswer: 'Present',
  };
};

const isAllDataInformed = (
  selectedVerbs: string[],
  verbCollection: VerbEntityGlobal[]
): boolean =>
  Array.isArray(selectedVerbs) &&
  Array.isArray(verbCollection) &&
  selectedVerbs.length > 0 &&
  verbCollection.length > 0;

export const pickRandomVerb = (
  selectedVerbs: string[],
  verbCollection: VerbEntityGlobal[]
): VerbEntityApi => {
  if (isAllDataInformed(selectedVerbs, verbCollection)) {
    const index = Math.floor(Math.random() * selectedVerbs.length);
    const [selectedVerbWithInfo] = verbCollection.filter(
      verb => verb.infinitive === selectedVerbs[index]
    );
    return selectedVerbWithInfo;
  }
  return {
    infinitive: '',
    past: '',
    participle: '',
    translation: '',
  };
};

export const splitSentence = (sentence: string): string[] =>
  sentence ? sentence.split(/{verb}/g) : [];

