import * as React from "react";
import { TextFieldComponent } from 'common/components';
import { Verb, VerbQuiz, VerbTenses } from "../test-fill-gap.vm";

interface Props {
  isGap: boolean;
  text: string;
}

export const GapComponent: React.FC<Props> = props => {
  const { isGap, text } = props;
  return isGap ? (
    <TextFieldComponent name="result" label="response" />
  ) : (
    <span>{text}</span>
  );
}
