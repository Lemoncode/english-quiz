import React from 'react';
import { AppLayout } from '../layout';
import { TestVerbFormContainer } from 'pods/test-verb-forms';

export const TestVerbFormsScene: React.FC = () => {
  return (
    <AppLayout background={'light'}>
      <TestVerbFormContainer />
    </AppLayout>
  );
};
