import React from 'react';
import { HomeContainer } from 'pods/home';
import { AppLayout } from '../layout';

export const HomeScene: React.FC = () => {
  return (
    <AppLayout background={'white'}>
      <HomeContainer />
    </AppLayout>
  );
};
