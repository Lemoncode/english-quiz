import * as React from 'react';
import { loadFullSentencesCollection } from 'core/sentences';
import { SentenceEntityApi } from 'core/sentences';
import { pickRandomSentence } from './test-sentences.business';
import { TestSentencesComponent } from './test-sentences.component';
import { selectedVerb } from 'core/sentences';
import { VerbEntityGlobal } from 'core/verbs';



export const TestSentencesContainer: React.FC = () => {
  const [sentencesCollection, setSentencesCollection] = React.useState<
    SentenceEntityApi[]
  >([]);
  const [sentenceSelected, setsentenceSelected] = React.useState<
    SentenceEntityApi
  >({
    verb: '',
    sentence: '',
    rigthAnswer: '',
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
  }, []);

  React.useEffect(() => {
    const randomSentence = pickRandomSentence(sentencesCollection);
    setsentenceSelected(randomSentence);
    console.log(selectedVerb)
  }, [sentencesCollection]);

  // const { verb, sentence, rigthAnswer } = sentenceSelected;

  return <TestSentencesComponent sentence={sentenceSelected} />;
};
