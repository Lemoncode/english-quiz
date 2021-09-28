import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { QuestionStatus, SentenceEntityVm } from '../test-sentences.vm';
import { SentenceComponent } from './sentence.component';
import * as styles from 'common/styles/tests.styles';

interface ButtonGroupProps {
  sentenceSelected: SentenceEntityVm;
  setRightAnswerValue: (number) => void;
  setVerbsForms: (string) => void;
  setShowSetenceResult: (boolean) => void;
}

const TensesButtonGroup: React.FunctionComponent<ButtonGroupProps> = props => {
  const {
    sentenceSelected,
    setRightAnswerValue,
    setVerbsForms,
    setShowSetenceResult,
  } = props;
  const { present, past, participle, rightTenseAnswer } = sentenceSelected;

  const handleButtonValue = e => {
    e.currentTarget.value === rightTenseAnswer
      ? setRightAnswerValue(QuestionStatus.correct)
      : setRightAnswerValue(QuestionStatus.incorrect);
    setVerbsForms(e.currentTarget.value);
    setShowSetenceResult(true);
  };
  return (
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
  );
};

interface ShowResultsProps {
  sentenceSelected: SentenceEntityVm;
  rightAnswerValue: number;
}

const ShowResultsSentence: React.FunctionComponent<ShowResultsProps> = props => {
  const { sentenceSelected, rightAnswerValue } = props;
  const { rightTextAnswer, prefixSentence, sufixSentence } = sentenceSelected;

  const {
    answer,
    ballons,
    buttonWrong,
    buttonRight,
    correctSpanStyle,
    insideBtn,
    insideRightAnswer,
    picture,
    verbsForm,
  } = styles;

  return (
    <>
      {(() => {
        switch (rightAnswerValue) {
          case QuestionStatus.correct:
            return (
              <div className={insideRightAnswer}>
                <div className={buttonRight}>
                  <span>RIGHT !!!!</span>
                </div>
                <div>
                  <img
                    className={`${picture} ${ballons}`}
                    src={`/assets/right-answer/right.png`}
                    alt=""
                  />
                </div>
              </div>
            );
          case QuestionStatus.incorrect:
            return (
              <div className={insideRightAnswer}>
                <div>
                  <div className={buttonWrong}>
                    <div className={insideBtn}>
                      <span>Oops... nope</span>
                    </div>
                  </div>
                  <span className={answer}>Answer</span>
                  <span className={verbsForm}>
                    <span>{prefixSentence}</span>{' '}
                    <span className={correctSpanStyle}>{rightTextAnswer}</span>{' '}
                    <span>{sufixSentence}</span>
                  </span>
                </div>
              </div>
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
}

export const BodyComponent: React.FunctionComponent<Props> = props => {
  const { sentenceSelected } = props;
  const { translation } = sentenceSelected;
  const {
    arrowIcon,
    backContainer,
    buttonGroupContainer,
    backContainerSentence,
    insideBtnContainer,
    mainContainer,
    nextBtn,
    picture,
    pictureContainer,
    title,
  } = styles;

  const [rightAnswerValue, setRightAnswerValue] = React.useState(
    QuestionStatus.notAnsweredYet
  );
  const [verbForms, setVerbsForms] = React.useState('');

  const [showSentenceResult, setShowSetenceResult] = React.useState(false);

  const handleNextQuestion = () => {
    setShowSetenceResult(false);
  };
  return (
    <main className={mainContainer}>
      <h1 className={title}>{translation.toUpperCase()}</h1>
      <div
        className={!showSentenceResult ? backContainer : backContainerSentence}
      >
        <div className={pictureContainer}>
          <img className={picture} src={`/assets/verb-images/buy.png`} />
        </div>
        {!showSentenceResult && (
          <>
            <div className={buttonGroupContainer}>
              <TensesButtonGroup
                sentenceSelected={sentenceSelected}
                setRightAnswerValue={setRightAnswerValue}
                setVerbsForms={setVerbsForms}
                setShowSetenceResult={setShowSetenceResult}
              />
            </div>
            <SentenceComponent
              sentenceSelected={sentenceSelected}
              rightAnswerValue={rightAnswerValue}
              verbForms={verbForms}
            />
          </>
        )}
        {showSentenceResult && (
          <>
            <ShowResultsSentence
              sentenceSelected={sentenceSelected}
              rightAnswerValue={rightAnswerValue}
            />

            <Button
              className={nextBtn}
              onClick={handleNextQuestion}
              variant="contained"
            >
              <div className={insideBtnContainer}>
                <span>Next</span>
                <ArrowForwardIcon className={arrowIcon} />
              </div>
            </Button>
          </>
        )}
      </div>
    </main>
  );
};
