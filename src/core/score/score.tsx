import React from 'react';
import { Score, createDefaultScore } from './score.model';

interface ScoreContext {
  score: Score;
  setScore: (score: Score) => void;
}

export const scoreContext = React.createContext<ScoreContext>({
  score: createDefaultScore(),
  setScore: value => {
    console.log('Score Context, forgot provider on top of root?');
  },
});

export const ScoreProvider: React.FC = props => {
  const [score, setScore] = React.useState<Score>(createDefaultScore());

  return (
    <scoreContext.Provider
      value={{
        score,
        setScore,
      }}
    >
      {props.children}
    </scoreContext.Provider>
  );
};
