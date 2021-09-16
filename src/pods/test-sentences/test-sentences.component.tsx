import * as React from 'react';
import * as styles from 'common/styles/tests.styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Typography, Button } from '@material-ui/core';
import { SentenceEntityApi } from 'core/sentences';
import { VerbEntityGlobal } from 'core/verbs';

interface Props {
  sentence: SentenceEntityApi;
  selectedVerb: VerbEntityGlobal;
}

export const TestSentencesComponent: React.FC<Props> = props => {
  const { sentence, selectedVerb } = props;

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
      <h1 className={title}>{selectedVerb.translation.toUpperCase()}</h1>
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
            <Button>{selectedVerb.infinitive}</Button>
            <Button>{selectedVerb.past}</Button>
            <Button>{selectedVerb.participle}</Button>
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
