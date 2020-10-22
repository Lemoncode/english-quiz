import { defaultFullVerbs, defaultSelectedVerbs } from './global-verbs.storage';
import Lockr from 'lockr';

export interface VerbEntityApi {
  infinitive: string;
  past: string;
  participle: string;
  translation: string;
}

let fullVerbCollection: VerbEntityApi[] = defaultFullVerbs;
let selectedVerbCollection: string[] = Lockr.get(
  'selectedVerbs',
  defaultSelectedVerbs
);

// Simulating AJAX Call
export const loadFullVerbCollection = async (): Promise<VerbEntityApi[]> =>
  Promise.resolve(fullVerbCollection);

export const loadSelectedVerbCollection = async (): Promise<string[]> => {
  selectedVerbCollection = Lockr.get('selectedVerbs', defaultSelectedVerbs);
  return Promise.resolve(selectedVerbCollection);
};

export const saveFullVerbCollection = async (
  verbCollection: VerbEntityApi[]
) => {};

export const saveSelectedVerbCollection = async (
  selectedCollection: string[]
) => {
  Lockr.set('selectedVerbs', selectedCollection);
};
