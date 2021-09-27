import React from 'react';
import { Typography } from '@material-ui/core';
import { QuestionStatus, SentenceEntityVm } from '../test.sentences.vm';
import * as styles from 'common/styles/tests.styles';

const VerbGapComponent = () => {
  const { decoracionUnderLine } = styles;
  return (
    <span className={decoracionUnderLine}>
      {' '}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
  );
};

interface VerbComponentProps {
  sentenceSelected: SentenceEntityVm;
  rightAnswerValue: number;
  rightTextAnswer: string;
  verbForms: string;
}

const VerbComponent: React.FC<VerbComponentProps> = (
  props: VerbComponentProps
) => {
  const {
    rightTextAnswer,
    rightAnswerValue,
    sentenceSelected,
    verbForms,
  } = props;
  const { present, past, participle } = sentenceSelected;
  const { correctSpanStyle, incorrectSpanStyle } = styles;

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
    <>
      {(() => {
        switch (rightAnswerValue) {
          case QuestionStatus.notAnsweredYet:
            return <VerbGapComponent />;
          case QuestionStatus.correct:
            return <span className={correctSpanStyle}>{rightTextAnswer}</span>;
          case QuestionStatus.incorrect:
            return (
              <span className={incorrectSpanStyle}>
                {switchVerbForms(verbForms)}
              </span>
            );
          default:
            return null;
        }
      })()}
    </>
  );
};

interface Props {
  sentenceSelected: SentenceEntityVm;
  verbForms: string;
  rightAnswerValue: number;
}

export const SentenceComponent: React.FunctionComponent<Props> = props => {
  const { sentenceSelected, verbForms, rightAnswerValue } = props;

  const { prefixSentence, sufixSentence, rightTextAnswer } = sentenceSelected;
  const { title } = styles;

  return (
    <Typography className={title} variant="body1" component="h5">
      <span> {prefixSentence}</span>
      <VerbComponent
        sentenceSelected={sentenceSelected}
        rightTextAnswer={rightTextAnswer}
        rightAnswerValue={rightAnswerValue}
        verbForms={verbForms}
      />
      <span> {sufixSentence}</span>
    </Typography>
  );
};
