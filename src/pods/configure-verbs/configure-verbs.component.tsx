import * as React from 'react';
import {
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
} from '@material-ui/core';
import { VerbEntity } from './configure-verbs.vm';
import produce, { immerable } from 'immer';

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

  React.useEffect(() => {
    setTemporalSelection(verbCollection);
  }, [verbCollection]);

  const handleCheckedChange = (verbId: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTemporalSelection = produce(temporalSelection, draft => {
      const index = draft.findIndex(item => item.verbKey === verbId);

      if (index !== -1) {
        draft[index].selected = !draft[index].selected;
      }
    });

    setTemporalSelection(newTemporalSelection);
  };

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
