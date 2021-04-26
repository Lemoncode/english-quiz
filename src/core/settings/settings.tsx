import React from 'react';
import { SettingsEntity } from './settings.model';
import { DefaultSettings } from 'core/const';

interface SettingsContext {
  userSettings: SettingsEntity;
  setUserSettings: (settings: SettingsEntity) => void;
}

export const settingsContext = React.createContext<SettingsContext>({
  userSettings: {
    numberQuestions: DefaultSettings.DEFAULT_NUMBER_QUESTIONS,
    secondChance: DefaultSettings.DEFAULT_SECOND_CHANCE_ENABLED,
  },
  setUserSettings: (settings: SettingsEntity) => {
    console.log('Settings Context, forgot provider on top of root?');
  },
});

export const SettingsProvider: React.FC = props => {
  const [userSettings, setUserSettings] = React.useState<SettingsEntity>({
    numberQuestions: DefaultSettings.DEFAULT_NUMBER_QUESTIONS,
    secondChance: DefaultSettings.DEFAULT_SECOND_CHANCE_ENABLED,
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
