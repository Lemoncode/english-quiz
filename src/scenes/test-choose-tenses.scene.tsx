import * as React from 'react';
import { AppLayout } from 'layout';
import { TestChooseTensesContainer } from 'pods/test-choose-tenses';

export const TestChooseTensesScene: React.FC = () => {
  return (
    <AppLayout background={'light'}>
      <TestChooseTensesContainer />
    </AppLayout>
  );
};
