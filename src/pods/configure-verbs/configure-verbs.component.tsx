import * as React from 'react';
import {
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
} from '@material-ui/core';
import { VerbEntity } from './configure-verbs.vm';
import produce, { immerable } from 'immer';
import { getSelectedNumber, selectOrDeselectAll } from "./configure-verbs.business";

interface Props {
  verbCollection: VerbEntity[];
  onSave: (verbs: VerbEntity[]) => void;
  onCancel: () => void;
}

export const ConfigureVerbsComponent: React.FC<Props> = props => {
  const { verbCollection, onSave, onCancel } = props;
  const [temporalSelection, setTemporalSelection] = React.useState(
    verbCollection
  );
  const [temporalSelected, setTemporalSelected] = React.useState(0);

  React.useEffect(() => {
    setTemporalSelection(verbCollection);
    setTemporalSelected(getSelectedNumber(verbCollection));
  }, [verbCollection]);

  const handleCheckedChange = (verbId: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTemporalSelection = produce(temporalSelection, draft => {
      const index = draft.findIndex(item => item.verbKey === verbId);

      if (index !== -1) {
        if (draft[index].selected) {
          setTemporalSelected(temporalSelected-1);
        } else {
          setTemporalSelected(temporalSelected+1);
        }
        draft[index].selected = !draft[index].selected;
      }
    });

    setTemporalSelection(newTemporalSelection);
  };

  const handleMasterCheckboxChange = () => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (temporalSelected !== verbCollection.length) {
      setTemporalSelection(selectOrDeselectAll(temporalSelection, true));
      setTemporalSelected(verbCollection.length)
    } else {
      setTemporalSelection(selectOrDeselectAll(temporalSelection, false));
      setTemporalSelected(0);
    }
  }

  return (
    <>
      <Typography variant="h3">Choose verbs to run the test:</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSave(temporalSelection)}
      >
        Save
      </Button>
      <Button variant="contained" color="secondary" onClick={onCancel}>
        Cancel
      </Button>

      <ul>
        <li>
          <FormControlLabel
            control={
              <Checkbox
                checked={temporalSelected !== 0}
                onChange={handleMasterCheckboxChange()}
                color="primary"
                indeterminate={
                  temporalSelected !== 0 &&
                  temporalSelected !== verbCollection.length
                }
              />
            }
            label={`Total selected: ${temporalSelected}`}
          />
        </li>
        {temporalSelection.map(verb => (
          <li key={verb.verbKey}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={verb.selected}
                  onChange={handleCheckedChange(verb.verbKey)}
                  color="primary"
                />
              }
              label={verb.verbDescription}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
