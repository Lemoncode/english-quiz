import React from 'react';
import * as styles from 'common/styles/tests.styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Button } from '@material-ui/core';
import { QuestionStatus, SentenceEntityVm } from '../test.sentences.vm';
import { SentenceComponent } from './sentence.component';

interface Props {
  sentenceSelected: SentenceEntityVm;
}

export const BodyComponent: React.FunctionComponent<Props> = props => {
  const { sentenceSelected } = props;
  const {
    present,
    past,
    participle,
    translation,
    rightTenseAnswer,
  } = sentenceSelected;
  const {
    title,
    mainContainer,
    buttonGroupContainer,
    backContainer,
    pictureContainer,
    picture,
  } = styles;

  const [rightAnswerValue, setRightAnswerValue] = React.useState(
    QuestionStatus.notAnsweredYet
  );
  const [verbForms, setVerbsForms] = React.useState('');

  const handleButtonValue = e => {
    e.currentTarget.value === rightTenseAnswer
      ? setRightAnswerValue(QuestionStatus.correct)
      : setRightAnswerValue(QuestionStatus.incorrect);
    setVerbsForms(e.currentTarget.value);
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
          <SentenceComponent
            sentenceSelected={sentenceSelected}
            rightAnswerValue={rightAnswerValue}
            verbForms={verbForms}
          />
        </div>
      </div>
    </main>
  );
};
