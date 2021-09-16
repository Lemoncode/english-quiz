import { SentenceEntityGlobal } from './global-sentences.model';
import { VerbEntityGlobal } from '../verbs/global-verbs.model';

const selectedVerb: VerbEntityGlobal = {
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
];
