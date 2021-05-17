import { routes } from 'core/router';
import * as React from 'react';
import { useHistory } from 'react-router';
import { TestSentenceFillGapComponent } from './test-sentence-fill-gap.component';

const INITIAL_ANSWERED_CORRECTLY = 0;
const INITIAL_CURRENT_QUESTION = 1;

export const TestSentenceFillGapContainer = () => {
  const history = useHistory();

  const [currentScore, setCurrentScore] = React.useState(
    INITIAL_ANSWERED_CORRECTLY
  );

  const [currentQuestion, setCurrentQuestion] = React.useState(
    INITIAL_CURRENT_QUESTION
  );

  const handleBack = () => {
    history.push(routes.root);
  };

  return (
    <TestSentenceFillGapComponent
      currentQuestion={currentQuestion}
      score={currentScore}
      handleBack={handleBack}
    />
  );
};
