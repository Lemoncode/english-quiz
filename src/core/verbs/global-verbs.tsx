import React from 'react';
import { VerbEntityGlobal } from './global-verbs.model';

interface GlobalVerbsContext {
  verbCollection: VerbEntityGlobal[];
  setVerbCollection: (verbCollection: VerbEntityGlobal[]) => void;
  selectedVerbs: string[]; // verb key infinitive
  setSelectedVerbs: (verbKeys: string[]) => void;
}

export const globalVerbsContext = React.createContext<GlobalVerbsContext>({
  verbCollection: [],
  setVerbCollection: value => {
    console.log('Global verb Context, forgot provider on top of root?');
  },
  selectedVerbs: [],
  setSelectedVerbs: (verbKeys: string[]) => {
    console.log('Global verb Context, forgot provider on top of root?');
  },
});

export const GlobalVerbsProvider: React.FC = props => {
  const [verbCollection, setVerbCollection] = React.useState<
    VerbEntityGlobal[]
  >([]);

  const [selectedVerbs, setSelectedVerbs] = React.useState<string[]>([]);

  return (
    <globalVerbsContext.Provider
      value={{
        verbCollection,
        setVerbCollection,
        selectedVerbs,
        setSelectedVerbs,
      }}
    >
      {props.children}
    </globalVerbsContext.Provider>
  );
};
