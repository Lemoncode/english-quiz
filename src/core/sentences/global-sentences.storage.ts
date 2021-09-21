import { SentenceEntityGlobal } from './global-sentences.model';

export const verb = {
  infinitive: 'win',
  past: 'won',
  participle: 'won',
  translation: 'ganar',
};

export const defaultSentences: SentenceEntityGlobal[] = [
  {
    verb: 'win',
    sentence: `Brazil {verb} five world cups, it’s incredible!`,
    rightAnswer: 'Past',
  },
  {
    verb: 'win',
    sentence: `I only want to see whether you will let me {verb} this ten, or beat it.`,
    rightAnswer: 'Present',
  },
  {
    verb: 'win',
    sentence: `You won't {verb} this one, so give up now.`,
    rightAnswer: 'Present',
  },
  {
    verb: 'win',
    sentence: `Oliver had {verb} the game in overtime.`,
    rightAnswer: 'Participle',
  },
  {
    verb: verb.translation,
    sentence: `He had {verb} this game against his school rival.`,
    rightAnswer: 'Participle',
  },
];
