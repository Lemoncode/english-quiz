import React from 'react';
import { useField } from 'formik';
import MuiTextField, { TextFieldProps } from '@material-ui/core/TextField';

// temporary
interface Props {
  name: string;
  id: string;
  value: string;
}

// Temporary hack
export const InputComponent: React.FunctionComponent = (props: any) => {
  const [field, meta] = useField(props.name);
  const hasError = Boolean(meta && meta.touched && meta.error);
  const { name, id, value } = props;
  const inputProps = Boolean(field) ? field : props;

  return (
    <input
      type="text"
      name={name}
      id={id}
      onChange={inputProps.onChange}
      value={inputProps.value}
      onBlur={inputProps.onBlur}
    />
  );
};
