import * as React from 'react';
import { loadFullSentencesCollection } from 'core/sentences';
import { SentenceEntityApi } from 'core/sentences';
import { pickRandomSentence } from './test-sentences.business';
import { TestSentencesComponent } from './test-sentences.component';
import { emptySentence, SentenceEntityVm } from './test.sentences.vm';
import { mapFromSentenceApiToSentenceVm } from './test-sentences.mappers';
import { globalVerbsContext } from 'core/verbs';

export const TestSentencesContainer: React.FC = () => {
  const { verbCollection, selectedVerbs } = React.useContext(
    globalVerbsContext
  );

  // I do not know if this filter to leave me only the selected 
  // verbs is necessary or is it in another site already done
  const selectedVerbsObject = verbCollection.filter(
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

  React.useEffect(() => {
    if (sentencesCollection.length > 0) {
      const randomSentence = pickRandomSentence(sentencesCollection);
      const mapRandomSentence = mapFromSentenceApiToSentenceVm(
        randomSentence,
        selectedVerbsObject
      );
      setsentenceSelected(mapRandomSentence);
    }
  }, [sentencesCollection]);

  return <TestSentencesComponent sentenceSelected={sentenceSelected} />;
};
