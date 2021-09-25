import React from 'react';
import { Typography } from '@material-ui/core';
import { SentenceEntityVm } from '../test.sentences.vm';
import * as styles from 'common/styles/tests.styles';

interface Props {
  sentenceSelected: SentenceEntityVm;
  verbForms: string;
  rightAnswerValue: boolean;
}

export const SpanComponent: React.FunctionComponent<Props> = props => {
  const { sentenceSelected, verbForms, rightAnswerValue } = props;
  const {
    present,
    past,
    participle,
    prefixSentence,
    sufixSentence,
  } = sentenceSelected;
  const {
    decoracionUnderLine,
    correctSpanStyle,
    incorrectSpanStyle,
    title,
  } = styles;

  const switchVerbForms = state => {
    switch (state) {
      case 'Present':
        return present;
      case 'Past':
        return past;
      default:
        return participle;
    }
  };

  return (
    <Typography className={title} variant="body1" component="h5">
      <span> {prefixSentence}</span>
      {rightAnswerValue === null ? (
        <span className={decoracionUnderLine}>
          {' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      ) : rightAnswerValue ? (
        <span className={correctSpanStyle}>{switchVerbForms(verbForms)}</span>
      ) : (
        <span className={incorrectSpanStyle}>{switchVerbForms(verbForms)}</span>
      )}
      <span> {sufixSentence}</span>
    </Typography>
  );
};
