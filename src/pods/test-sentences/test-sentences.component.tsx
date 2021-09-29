import * as React from 'react';
import { SentenceEntityVm } from './test-sentences.vm';
import { BodyComponent } from './components';
import { SentenceEntityApi } from 'core/sentences';

interface Props {
  sentenceSelected: SentenceEntityVm;
  mapRandomSentence: (
    sentencesCollection: SentenceEntityApi[]
  ) => SentenceEntityVm;
  sentencesCollection: SentenceEntityApi[];
  setsentenceSelected: (sentence: SentenceEntityVm) => void;
  currentQuestion: number;
  totalQuestions: number;
  onNextQuestion: () => void;
  score: number;
  setScore: (value: number) => void;
}

export const TestSentencesComponent: React.FC<Props> = props => {
  const {
    sentenceSelected,
    mapRandomSentence,
    sentencesCollection,
    setsentenceSelected,
    currentQuestion,
    totalQuestions,
    onNextQuestion,
    score,
    setScore
  } = props;

  return (
    <BodyComponent
      sentenceSelected={sentenceSelected}
      mapRandomSentence={mapRandomSentence}
      sentencesCollection={sentencesCollection}
      setsentenceSelected={setsentenceSelected}
      currentQuestion={currentQuestion}
      totalQuestions={totalQuestions}
      onNextQuestion={onNextQuestion}
      score={score}
      setScore={setScore}
    />
  );
};
