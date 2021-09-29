import * as React from 'react';
import { loadFullSentencesCollection } from 'core/sentences';
import { SentenceEntityApi } from 'core/sentences';
import { pickRandomSentence } from './test-sentences.business';
import { TestSentencesComponent } from './test-sentences.component';
import { emptySentence, SentenceEntityVm } from './test-sentences.vm';
import { mapFromSentenceApiToSentenceVm } from './test-sentences.mappers';
import { globalVerbsContext } from 'core/verbs';

export const TestSentencesContainer: React.FC = () => {
  const { verbCollection, selectedVerbs } = React.useContext(
    globalVerbsContext
  );

  const selectedVerbsWithInfo = verbCollection.filter(
    x => selectedVerbs.indexOf(x.infinitive) > -1
  );

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

  const mapRandomSentence = (
    sentencesCollection: SentenceEntityApi[]
  ): SentenceEntityVm =>
    mapFromSentenceApiToSentenceVm(
      pickRandomSentence(sentencesCollection),
      selectedVerbsWithInfo
    );

  React.useEffect(() => {
    if (sentencesCollection.length > 0) {
      setsentenceSelected(mapRandomSentence(sentencesCollection));
    }
  }, [sentencesCollection]);

  return (
    <TestSentencesComponent
      sentenceSelected={sentenceSelected}
      mapRandomSentence={mapRandomSentence}
      sentencesCollection={sentencesCollection}
      setsentenceSelected={setsentenceSelected}
    />
  );
};
