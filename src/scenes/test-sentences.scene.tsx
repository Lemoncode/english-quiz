import * as React from 'react';
import { AppLayout } from 'layout';
import { TestSentencesContainer } from 'pods/test-sentences';


export const TestSentencesScene: React.FC = () => {
  return (
    <AppLayout background={'light'}>
      <TestSentencesContainer />
    </AppLayout>
  );
};