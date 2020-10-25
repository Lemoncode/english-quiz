import * as vm from 'core/verbs';
import * as api from './global-verbs.api';

const mapVerbFromApiToVm = (
  apiEntry: api.VerbEntityApi
): vm.VerbEntityGlobal => ({
  ...apiEntry,
});

const mapVerbCollectionFromApiToVm = (
  apiVerbCollection: api.VerbEntityApi[]
): vm.VerbEntityGlobal[] => apiVerbCollection.map(mapVerbFromApiToVm);

export const loadFullVerbCollection = async (): Promise<vm.VerbEntityGlobal[]> => {
  const verbCollection = await api.loadFullVerbCollection();
  return mapVerbCollectionFromApiToVm(verbCollection);
};

export const loadSelectedVerbCollection = async (): Promise<string[]> => {
  const selectedVerbCollection = await api.loadSelectedVerbCollection();
  return selectedVerbCollection;
};

export const saveSelectedVerbCollection = async (selectedVerbs: string[]) => {
  api.saveSelectedVerbCollection(selectedVerbs);
};
