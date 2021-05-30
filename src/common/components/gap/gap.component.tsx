import * as React from 'react';
import { Field } from 'formik';
import * as styles from 'common/styles/tests.styles';

interface Props {
  isGap: boolean;
  text: string;
  tense: string;
  fieldName: string;
}

export const GapComponent: React.FC<Props> = props => {
  const { isGap, text, tense, fieldName } = props;
  const { inputField, verbsForm } = styles;
  return isGap ? (
    <div className={inputField}>
      <label>{tense}</label>
      <Field type="text" name={fieldName} id={fieldName} autoComplete="off" />
    </div>
  ) : (
    <span className={verbsForm}>
      {tense}: {text}
    </span>
  );
};
