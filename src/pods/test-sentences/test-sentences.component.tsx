import * as React from 'react';
import { SentenceEntityVm } from './test-sentences.vm';
import { BodyComponent } from './components';
import { SentenceEntityApi } from '../../core/sentences/global-sentences.api';

interface Props {
  sentenceSelected: SentenceEntityVm;
  mapRandomSentence: (
    sentencesCollection: SentenceEntityApi[]
  ) => SentenceEntityVm;
  sentencesCollection: SentenceEntityApi[];
  setsentenceSelected: (sentence: SentenceEntityVm) => void;
}

export const TestSentencesComponent: React.FC<Props> = props => {
  const {
    sentenceSelected,
    mapRandomSentence,
    sentencesCollection,
    setsentenceSelected,
  } = props;

  return (
    <BodyComponent
      sentenceSelected={sentenceSelected}
      mapRandomSentence={mapRandomSentence}
      sentencesCollection={sentencesCollection}
      setsentenceSelected={setsentenceSelected}
    />
  );
};
