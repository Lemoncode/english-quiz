import React from 'react';
import { AppLayout } from '../layout';
import { FinalScoreContainer } from 'pods/final-score';

export const FinalScoreScene: React.FC = () => {
  return (
    <AppLayout background={'light'}>
      <FinalScoreContainer />
    </AppLayout>
  );
};
