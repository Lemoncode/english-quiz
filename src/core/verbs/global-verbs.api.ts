import { defaultFullVerbs, defaultSelectedVerbs } from './global-verbs.storage';
import { storageFactory } from 'core/local-storage';

export const local = storageFactory(localStorage);
export const SELECTED_VERBS_KEY = 'selectedVerbs';

export interface VerbEntityApi {
  infinitive: string;
  past: string;
  participle: string;
  translation: string;
}

let fullVerbCollection: VerbEntityApi[] = defaultFullVerbs;
let selectedVerbCollection: string[] = [];

// Simulating AJAX Call
export const loadFullVerbCollection = async (): Promise<VerbEntityApi[]> =>
  Promise.resolve(fullVerbCollection);

export const loadSelectedVerbCollection = async (): Promise<string[]> => {
  const storageSelectedVerbCollection = local.getItem(SELECTED_VERBS_KEY);

  selectedVerbCollection =
    storageSelectedVerbCollection !== null
      ? storageSelectedVerbCollection
      : defaultSelectedVerbs;

  return Promise.resolve(selectedVerbCollection);
};

export const saveSelectedVerbCollection = async (
  selectedCollection: string[]
) => {
  local.setItem(SELECTED_VERBS_KEY, selectedCollection);
};
