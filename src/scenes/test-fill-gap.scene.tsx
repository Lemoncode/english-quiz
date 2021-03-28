import * as React from 'react';
import { AppLayout } from "layout";
import { TestFillGapContainer } from "pods/test-fill-gap";

export const TestFillGapScene: React.FC = () => {
  return (
    <AppLayout background={'light'}>
      <TestFillGapContainer />
    </AppLayout>
  );
};