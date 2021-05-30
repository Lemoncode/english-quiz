import React from 'react';
import { ChooseTenses, createDefaultChooseTenses } from './choose-tenses.model';

interface ChooseTensesContext {
  chooseTenses: ChooseTenses;
  setChooseTenses: (chooseTenses: ChooseTenses) => void;
}

export const chooseTensesContext = React.createContext<ChooseTensesContext>({
  chooseTenses: createDefaultChooseTenses(),
  setChooseTenses: value => {
    console.log('ChooseTenses Context, forgot provider on top of root?');
  },
});

export const ChooseTensesProvider: React.FC = props => {
  const [chooseTenses, setChooseTenses] = React.useState<ChooseTenses>(
    createDefaultChooseTenses()
  );

  return (
    <chooseTensesContext.Provider
      value={{
        chooseTenses,
        setChooseTenses,
      }}
    >
      {props.children}
    </chooseTensesContext.Provider>
  );
};
