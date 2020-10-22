import React from 'react';
import { SettingsEntity } from './settings.model';

interface SettingsContext {
  userSettings: SettingsEntity;
  setUserSettings: (settings: SettingsEntity) => void;
}

export const settingsContext = React.createContext<SettingsContext>({
  userSettings: {
    numberQuestions: 15,
    secondChance: false,
  },
  setUserSettings: (settings: SettingsEntity) => {
    console.log('Settings Context, forgot provider on top of root?');
  },
});

export const SettingsProvider: React.FC = props => {
  const [userSettings, setUserSettings] = React.useState<SettingsEntity>({
    numberQuestions: 15,
    secondChance: false,
  });

  return (
    <settingsContext.Provider
      value={{
        userSettings,
        setUserSettings,
      }}
    >
      {props.children}
    </settingsContext.Provider>
  );
};
