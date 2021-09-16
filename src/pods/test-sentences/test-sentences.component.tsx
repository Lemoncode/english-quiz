import * as React from 'react';
import * as styles from 'common/styles/tests.styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Typography, Button } from '@material-ui/core';
import { SentenceEntityApi } from 'core/sentences';

interface Props {
  sentence: SentenceEntityApi;
}

export const TestSentencesComponent: React.FC<Props> = props => {
  const { sentence } = props;

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
      <h1 className={title}>{sentence.verb.toUpperCase()}</h1>
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
            <Button>Buy</Button>
            <Button>Bought</Button>
            <Button>Bought</Button>
          </ButtonGroup>
        </div>
        <div>
          <Typography className={title} variant="body1" component="h5">
            {sentence.sentence}
          </Typography>
        </div>
      </div>
    </main>
  );
};
