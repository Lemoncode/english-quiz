import { SentenceEntityGlobal } from './global-sentences.model';
import { VerbEntityGlobal } from '../verbs';

export const selectedVerb: VerbEntityGlobal = {
  infinitive: 'win',
  past: 'won',
  participle: 'won',
  translation: 'ganar',
};

export const defaultSentences: SentenceEntityGlobal[] = [
  {
    verb: selectedVerb.infinitive,
    sentence: `Brazil _______ five world cups, it’s incredible!`,
    rigthAnswer: selectedVerb.past,
  },
  {
    verb: selectedVerb.infinitive,
    sentence: `I only want to see whether you will let me _______ this ten, or beat it.`,
    rigthAnswer: selectedVerb.infinitive,
  },
  {
    verb: selectedVerb.infinitive,
    sentence: `You won't _______ this one, so give up now.`,
    rigthAnswer: selectedVerb.infinitive,
  },
  {
    verb: selectedVerb.infinitive,
    sentence: `Oliver had _______ the game in overtime.`,
    rigthAnswer: selectedVerb.participle,
  },
  {
    verb: selectedVerb.infinitive,
    sentence: `He had _______ this game against his school rival.`,
    rigthAnswer: selectedVerb.participle,
  },
];
