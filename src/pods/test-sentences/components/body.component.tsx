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
    pictureContainer,
    picture,
  } = styles;
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
            <Button>{present}</Button>
            <Button>{past}</Button>
            <Button>{participle}</Button>
          </ButtonGroup>
        </div>
        <div>
          <Typography className={title} variant="body1" component="h5">
            <span> {prefixSentence}</span>
            <span style={{ color: 'red' }}> {past}</span>
            <span> {sufixSentence}</span>
          </Typography>
        </div>
      </div>
    </main>
  );
};
