import React from 'react';
import { UserSettingsContainer } from 'pods/user-settings';
import { AppLayout } from '../layout';

export const UserSettingsScene: React.FC = () => {
  return (
    <AppLayout background={'red'}>
      <UserSettingsContainer />
    </AppLayout>
  );
};
