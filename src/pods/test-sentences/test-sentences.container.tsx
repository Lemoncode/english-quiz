import * as React from 'react';
import { loadFullSentencesCollection } from 'core/sentences';
import { SentenceEntityApi } from 'core/sentences';
import { pickRandomSentence } from './test-sentences.business';
import { TestSentencesComponent } from './test-sentences.component';
import { VerbEntityGlobal } from 'core/verbs';

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
    SentenceEntityApi
  >({
    verb: '',
    sentence: '',
    rigthAnswer: 'Present',
  });
  const [selectedVerb, setSelectedVerb] = React.useState<VerbEntityGlobal>({
    infinitive: '',
    past: '',
    participle: '',
    translation: '',
  });

  React.useEffect(() => {
    loadFullSentencesCollection().then(sentence =>
      setSentencesCollection(sentence)
    );
    setSelectedVerb(verb);
  }, []);

  React.useEffect(() => {
    const randomSentence = pickRandomSentence(sentencesCollection);
    setsentenceSelected(randomSentence);
  }, [sentencesCollection]);

  return (
    <TestSentencesComponent
      sentenceSelected={sentenceSelected}
      selectedVerb={selectedVerb}
    />
  );
};
