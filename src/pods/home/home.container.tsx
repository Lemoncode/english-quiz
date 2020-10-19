import * as React from 'react';
import { HomeComponent } from './home.component';
import { loadFullVerbCollection } from './home.api.vm';
import { globalVerbsContext } from 'core/verbs';
import { initialSelected } from './initialSelected';

export const HomeContainer = () => {
  const verbsContext = React.useContext(globalVerbsContext);

  const loadAllVerbs = async () => {
    const fullVerbCollection = await loadFullVerbCollection();
    verbsContext.setVerbCollection(fullVerbCollection);

    // TODO: store this in local storage
    const selectedVerbs: string[] = JSON.parse(
      localStorage.getItem('selectedVerbs')
    );
    if (selectedVerbs) verbsContext.setSelectedVerbs(selectedVerbs);
    else {
      verbsContext.setSelectedVerbs(initialSelected);
      localStorage.setItem('selectedVerbs', JSON.stringify(initialSelected));
    }
  };

  // Let's load the full list of verbs
  React.useEffect(() => {
    loadAllVerbs();
  }, []);

  return <HomeComponent />;
};
