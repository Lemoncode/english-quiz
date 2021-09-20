import { SentenceEntityApi } from 'core/sentences';

export const pickRandomSentence = (
  sentenceCollection: SentenceEntityApi[]
): SentenceEntityApi => {
  if (Array.isArray(sentenceCollection) && sentenceCollection.length > 0) {
    const sentenceCollectionLenght = sentenceCollection.length;
    const index = Math.floor(Math.random() * sentenceCollectionLenght);

    return sentenceCollection[index];
  }
  return {
    verb: '',
    sentence: '',
    rigthAnswer: 'Present',
  };
};

export const splitSentence = (sentence: string): string[] =>
  sentence ? sentence.split(/{verb}/g) : [];
