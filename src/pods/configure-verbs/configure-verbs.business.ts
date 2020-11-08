import { VerbEntity } from "./configure-verbs.vm";

export const getSelectedNumber = (temporalSelection: VerbEntity[]): number => {
  return temporalSelection.filter(({ selected }) => selected).length;
};

export const selectOrDeselectAll = (
  temporalSelection: VerbEntity[],
  selected: boolean,
): VerbEntity[] => {
  return temporalSelection.map(element => {
    return {
      selected,
      verbDescription: element.verbDescription,
      verbKey: element.verbKey,
    };
  });
};

export const getOnlySelected = (verbCollection: VerbEntity[]): VerbEntity[] => {
  return verbCollection.filter(({ selected }) => selected);
};