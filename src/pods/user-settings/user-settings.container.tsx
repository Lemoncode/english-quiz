import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { UserSettingsComponent } from './user-settings.component';
import { routes } from 'core/router';
import { settingsContext, SettingsEntity } from 'core/settings';

export const UserSettingsContainer = () => {
  const history = useHistory();
  const userSettingsContext = React.useContext(settingsContext);
  const [userSettings, setUserSettings] = React.useState<SettingsEntity>(
    userSettingsContext.userSettings
  );

  React.useEffect(() => {
    setUserSettings(userSettingsContext.userSettings);
  }, []);

  const handleCancel = () => {
    history.push(routes.root);
  };

  const handleSave = (settings: SettingsEntity) => {
    userSettingsContext.setUserSettings(settings);
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
