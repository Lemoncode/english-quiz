import * as React from 'react';
import { SentenceEntityVm } from './test.sentences.vm';
import { BodyComponent } from './components';

interface Props {
  sentenceSelected: SentenceEntityVm;
}

export const TestSentencesComponent: React.FC<Props> = props => {
  const { sentenceSelected } = props;

  return <BodyComponent sentenceSelected={sentenceSelected} />;
};
