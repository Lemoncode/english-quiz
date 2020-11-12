import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { TextFieldComponent } from 'common/components';

interface Props {
  isGap: boolean;
  text: string;
  tense: string;
}

export const GapComponent: React.FC<Props> = props => {
  const { isGap, text, tense } = props;
  return isGap ? (
    <TextFieldComponent name="response" label={tense} />
  ) : (
    <Typography variant="subtitle1">
      {tense}: {text}
    </Typography>
  );
}
