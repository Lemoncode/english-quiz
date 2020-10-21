import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { UserSettings } from './user-settings.vm';
import { UserSettingsComponent } from './user-settings.component';
import { routes } from 'core/router';

export const UserSettingsContainer = () => {
  const history = useHistory();
  const [userSettings, setUserSettings] = React.useState<UserSettings>();

  React.useEffect(() => {
    //To-do: Create profile context or store in local
    setUserSettings({
      secondChance: true,
      numberQuestions: 15,
    });
  }, []);

  const handleCancel = () => {
    history.push(routes.root);
  };

  const handleSave = (settings: UserSettings) => {
    //To-do: Create profile context or store in local
    history.push(routes.root);
  };

  return (
    <UserSettingsComponent
      userSettings={userSettings}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
};
