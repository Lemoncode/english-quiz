import * as React from 'react';
import * as styles from 'common/styles/tests.styles';
import { TestsNavbar } from 'common/components';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

interface Props {
  currentQuestion: number;
  score: number;
  handleBack: () => void;
}

export const TestSentenceFillGapComponent: React.FC<Props> = props => {
  const { currentQuestion, score, handleBack } = props;

  const { mainContainer, nextBtn, insideBtnContainer, arrowIcon } = styles;

  return (
    <main className={mainContainer}>
      <TestsNavbar score={score} currentQuestion={currentQuestion} />
      <Button
        className={nextBtn}
        variant="contained"
        disableElevation
        onClick={handleBack}
      >
        <div className={insideBtnContainer}>
          Back <ArrowForwardIcon className={arrowIcon} />
        </div>
      </Button>
    </main>
  );
};
