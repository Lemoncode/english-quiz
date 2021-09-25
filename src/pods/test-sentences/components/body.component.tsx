import React from 'react';
import * as styles from 'common/styles/tests.styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Button } from '@material-ui/core';
import { SentenceEntityVm } from '../test.sentences.vm';
import { SpanComponent } from './span.component';

interface Props {
  sentenceSelected: SentenceEntityVm;
}

export const BodyComponent: React.FunctionComponent<Props> = props => {
  const { sentenceSelected } = props;
  const {
    rightAnswer,
    presentButton,
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

  const [rightAnswerValue, setRightAnswerValue] = React.useState(null);
  const [verbForms, setVerbsForms] = React.useState('');

  const handleButtonValue = e => {
    e.currentTarget.value === rightAnswer
      ? setRightAnswerValue(true)
      : setRightAnswerValue(false);
    setVerbsForms(e.currentTarget.value);
  };
  console.log(verbForms);
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
              {presentButton}
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
          <SpanComponent
            sentenceSelected={sentenceSelected}
            rightAnswerValue={rightAnswerValue}
            verbForms={verbForms}
          />
        </div>
      </div>
    </main>
  );
};
