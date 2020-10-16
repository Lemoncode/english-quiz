import * as React from 'react';
import { FinalScoreComponent } from './final-score.component';
import { scoreContext } from 'core/score';

export const FinalScoreContainer = () => {
  const { score } = React.useContext(scoreContext);

  return (
    <FinalScoreComponent
      total={score.totalQuestions}
      correct={score.answeredCorrectly}
    />
  );
};
