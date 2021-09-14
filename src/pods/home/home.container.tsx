import * as React from 'react';
import { HomeComponent } from './home.component';
import { loadFullVerbCollection, loadSelectedVerbCollection } from 'core/verbs';
import { globalVerbsContext } from 'core/verbs';
import { defaultSelectedVerbs } from 'core/verbs/global-verbs.storage';
import { sanitizeVerbSelectionList } from 'core/verbs/gobal-verbs-sanitizer';

export const HomeContainer = () => {
  const verbsContext = React.useContext(globalVerbsContext);

  const loadAllVerbs = async () => {
    const fullVerbCollection = await loadFullVerbCollection();
    verbsContext.setVerbCollection(fullVerbCollection);

    let selectedVerbs: string[] = await loadSelectedVerbCollection();
    
    selectedVerbs = sanitizeVerbSelectionList(
      selectedVerbs,
      defaultSelectedVerbs
    );
    verbsContext.setSelectedVerbs(selectedVerbs);
  };

  // Let's load the full list of verbs
  React.useEffect(() => {
    loadAllVerbs();
  }, []);

  return <HomeComponent />;
};
