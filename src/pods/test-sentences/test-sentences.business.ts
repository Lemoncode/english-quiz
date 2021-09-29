import { SentenceEntityApi } from 'core/sentences';

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
    specialForm: '',
  };
};

export const splitSentence = (sentence: string): string[] =>
  sentence ? sentence.split(/{verb}/g) : [];
