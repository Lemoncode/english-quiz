import * as React from 'react';
import {
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  TextField,
} from '@material-ui/core';
import { SettingsEntity } from 'core/settings';
import { QuestionsRestrictions } from 'core/const';
import { Formik } from 'formik';

interface Props {
  onSave: (settings: SettingsEntity) => void;
  onCancel: () => void;
  userSettings: SettingsEntity;
}

export const UserSettingsComponent: React.FC<Props> = props => {
  const { onSave, onCancel, userSettings } = props;

  //Material-UI limitation on TextField when prefilling the value
  const PREFILLED = true;

  return (
    <>
      <Typography variant="h3">User settings:</Typography>

      <Formik
        initialValues={{
          numberQuestions: userSettings.numberQuestions,
          secondChance: userSettings.secondChance,
        }}
        onSubmit={(values: SettingsEntity, { setSubmitting }) => {
          setSubmitting(false);
          onSave(values);
        }}
      >
        {({ values, handleSubmit, isSubmitting, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              name="numberQuestions"
              label="Number of questions"
              type="number"
              InputLabelProps={{
                shrink: PREFILLED,
              }}
              variant="outlined"
              inputProps={{
                min: QuestionsRestrictions.MIN_NUMBER_QUESTIONS,
                max: QuestionsRestrictions.MAX_NUMBER_QUESTIONS,
                step: QuestionsRestrictions.STEP,
              }}
              value={values.numberQuestions}
              onChange={handleChange}
            />

            <li>
              <FormControlLabel
                control={
                  <Checkbox
                    name="secondChance"
                    color="primary"
                    checked={values.secondChance}
                    onChange={handleChange}
                  />
                }
                label="Allow second chance"
              />
            </li>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              Save
            </Button>
            <Button variant="contained" color="secondary" onClick={onCancel}>
              Cancel
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};
