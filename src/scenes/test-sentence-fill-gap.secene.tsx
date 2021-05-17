import * as React from 'react';
import { AppLayout } from 'layout';
import { TestSentenceFillGapContainer } from 'pods/test-sentence-fill-gap';

export const TestSentenceFillGapScene: React.FC = () => {
  return (
    <AppLayout background={'light'}>
      <TestSentenceFillGapContainer />
    </AppLayout>
  );
};
