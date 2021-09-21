import * as React from 'react';
import { loadFullSentencesCollection } from 'core/sentences';
import { SentenceEntityApi } from 'core/sentences';
import { pickRandomSentence } from './test-sentences.business';
import { TestSentencesComponent } from './test-sentences.component';
import { VerbEntityGlobal } from 'core/verbs';
import { emptySentence, SentenceEntityVm } from './test.sentences.vm';
import { mapFromSentenceApiToSentenceVm } from './test-sentences.mappers';

export const verb: VerbEntityGlobal = {
  infinitive: 'win',
  past: 'won',
  participle: 'won',
  translation: 'ganar',
};

export const TestSentencesContainer: React.FC = () => {
  const [sentencesCollection, setSentencesCollection] = React.useState<
    SentenceEntityApi[]
  >([]);
  const [sentenceSelected, setsentenceSelected] = React.useState<
    SentenceEntityVm
  >(emptySentence);
  
  React.useEffect(() => {
    loadFullSentencesCollection().then(sentence =>
      setSentencesCollection(sentence)
    );
  }, []);

  React.useEffect(() => {
    const randomSentence = pickRandomSentence(sentencesCollection);
    setsentenceSelected(mapFromSentenceApiToSentenceVm(randomSentence, verb));
  }, [sentencesCollection]);

  return (
    <TestSentencesComponent
      sentenceSelected={sentenceSelected}
    />
  );
};
