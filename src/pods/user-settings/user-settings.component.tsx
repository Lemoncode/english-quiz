import * as React from 'react';
import Button from '@material-ui/core/Button';
import { SettingsEntity } from 'core/settings';
import { QuestionsRestrictions } from 'core/const';
import { Formik, Field, ErrorMessage } from 'formik';
import * as classes from 'common/styles/settings.styles';
interface Props {
  onSave: (settings: SettingsEntity) => void;
  onCancel: () => void;
  userSettings: SettingsEntity;
}

export const UserSettingsComponent: React.FC<Props> = props => {
  const { onSave, onCancel, userSettings } = props;
  const {
    mainContainer,
    title,
    backContainerUser,
    inputField,
    btnContainerUser,
    saveBtn,
    cancelBtn,
    errorMsg,
  } = classes;

  const validateNumberQuestions = (message) => (value) => {
    return value < QuestionsRestrictions.MIN_NUMBER_QUESTIONS
      || value > QuestionsRestrictions.MAX_NUMBER_QUESTIONS
      ? message
      : undefined;
  }

  return (
    <>
      <main className={mainContainer}>
        <h1 className={title}>User settings:</h1>
        <div className={backContainerUser}>
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
                <div className={inputField}>
                  <label htmlFor="numberQuestions">Number of questions</label>
                  <Field
                    type="number"
                    name="numberQuestions"
                    id="numberQuestions"
                    autoComplete="off"
                    value={values.numberQuestions}
                    onChange={handleChange}
                    validate={validateNumberQuestions('Must be between 5 & 100')}
                  />
                  <ErrorMessage
                    className={errorMsg}
                    component="span"
                    name="numberQuestions"
                  />
                </div>

                {/* Commented on purpose, just in case we want to recover second chance setting */
                /*<div className={inputField}>
                  <label htmlFor="secondChance">Allow second chance</label>
                  <Field
                    type="checkbox"
                    name="secondChance"
                    checked={values.secondChance}
                    onChange={handleChange}
                  />
                </div>*/}
                
                <div className={btnContainerUser}>
                  <Button
                    className={saveBtn}
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Save
                  </Button>
                  <Button
                    className={cancelBtn}
                    variant="contained"
                    color="secondary"
                    onClick={onCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </main>
    </>
  );
};
