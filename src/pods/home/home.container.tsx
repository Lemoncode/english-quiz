import * as React from 'react';
import { HomeComponent } from './home.component';
import { loadFullVerbCollection, loadSelectedVerbCollection } from 'core/verbs';
import { globalVerbsContext } from 'core/verbs';

export const HomeContainer = () => {
  const verbsContext = React.useContext(globalVerbsContext);

  const loadAllVerbs = async () => {
    const fullVerbCollection = await loadFullVerbCollection();
    verbsContext.setVerbCollection(fullVerbCollection);

    const selectedVerbs: string[] = await loadSelectedVerbCollection();
    verbsContext.setSelectedVerbs(selectedVerbs);
  };

  // Let's load the full list of verbs
  React.useEffect(() => {
    loadAllVerbs();
  }, []);

  return <HomeComponent />;
};
