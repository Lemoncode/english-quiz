import * as React from 'react';
import { AppLayout } from "layout";
import { TestMultipleChoiceContainer } from "pods/test-multiple-choice";

export const TestMultipleChoiceScene: React.FC = () => {
  return (
    <AppLayout background={'light'}>
      <TestMultipleChoiceContainer />
    </AppLayout>
  );
};