import React from 'react';
import { ConfigureVerbsContainer } from 'pods/configure-verbs';
import { AppLayout } from '../layout';

export const ConfigureVerbsScene: React.FC = () => {
  return (
    <AppLayout>
      <ConfigureVerbsContainer />
    </AppLayout>
  );
};
