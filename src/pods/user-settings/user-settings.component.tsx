import * as React from 'react';
import {
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  TextField,
  Container,
} from '@material-ui/core';
import { UserSettings } from './user-settings.vm';
import produce from 'immer';

interface Props {
  onSave: (settings: UserSettings) => void;
  onCancel: () => void;
  userSettings: UserSettings;
}

export const UserSettingsComponent: React.FC<Props> = props => {
  const { onSave, onCancel, userSettings } = props;
  const [temporalSettings, setTemporalSettings] = React.useState(userSettings);

  React.useEffect(() => {
    setTemporalSettings(userSettings);
  }, [userSettings]);

  const handleSecondChanceChange = () => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTemporalSettings(
      produce(temporalSettings, draft => {
        draft.secondChance = !draft.secondChance;
      })
    );
  };

  const handleNumberQuestionsChange = () => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTemporalSettings(
      produce(temporalSettings, draft => {
        draft.numberQuestions = e.target.valueAsNumber;
      })
    );
  };

  return (
    <>
      <Container>
        {temporalSettings ? (
          <>
            <Typography variant="h3">User settings:</Typography>

            <TextField
              id="questions-number"
              label="Number of questions"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              inputProps={{
                min: '0',
                step: '1',
              }}
              value={temporalSettings.numberQuestions}
              onChange={handleNumberQuestionsChange()}
            />

            <li>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={temporalSettings.secondChance}
                    color="primary"
                    onChange={handleSecondChanceChange()}
                  />
                }
                label="Allow second chance"
              />
            </li>
          </>
        ) : null}

        <Button
          variant="contained"
          color="primary"
          onClick={() => onSave(temporalSettings)}
        >
          Save
        </Button>
        <Button variant="contained" color="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Container>
    </>
  );
};
