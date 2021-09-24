import React from 'react';
import * as styles from 'common/styles/tests.styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Typography, Button } from '@material-ui/core';
import { SentenceEntityVm } from '../test.sentences.vm';

interface Props {
  sentenceSelected: SentenceEntityVm;
}

export const BodyComponent: React.FunctionComponent<Props> = props => {
  const { sentenceSelected } = props;
  const {
    prefixSentence,
    sufixSentence,
    rightAnswer,
    present,
    past,
    participle,
    translation,
  } = sentenceSelected;
  const {
    title,
    mainContainer,
    buttonGroupContainer,
    backContainer,
    decoracionUnderLine,
    correctSpanStyle,
    incorrectSpanStyle,
    pictureContainer,
    picture,
  } = styles;

  const [rightAnswerValue, setRightAnswerValue] = React.useState(null);
  const [verbForms, setVerbsForms] = React.useState('');

  const handleButtonValue = e => {
    e.currentTarget.value === rightAnswer ? setRightAnswerValue(true) : setRightAnswerValue(false);
    setVerbsForms(e.currentTarget.value);
  };

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
    <main className={mainContainer}>
      <h1 className={title}>{translation.toUpperCase()}</h1>
      <div className={backContainer}>
        <div className={pictureContainer}>
          <img className={picture} src={`/assets/verb-images/buy.png`} />
        </div>
        <div className={buttonGroupContainer}>
          <ButtonGroup
            variant="contained"
            color="primary"
            size="large"
            aria-label="contained primary button group"
          >
            <Button onClick={handleButtonValue} value="Present">
              {present}
            </Button>
            <Button onClick={handleButtonValue} value="Past">
              {past}
            </Button>
            <Button onClick={handleButtonValue} value="Participle">
              {participle}
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <Typography className={title} variant="body1" component="h5">
            <span> {prefixSentence}</span>
            {rightAnswerValue === null ? (
              <span className={decoracionUnderLine}>
                {' '}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ) : rightAnswerValue ? (
              <span className={correctSpanStyle}>
                {switchVerbForms(verbForms)}
              </span>
            ) : (
              <span className={incorrectSpanStyle}>
                {switchVerbForms(verbForms)}
              </span>
            )}
            <span> {sufixSentence}</span>
          </Typography>
        </div>
      </div>
    </main>
  );
};
