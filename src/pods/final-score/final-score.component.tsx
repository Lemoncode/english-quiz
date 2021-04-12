import { Button, Typography } from '@material-ui/core';
import { HistoryTwoTone } from '@material-ui/icons';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import * as classes from 'common/styles/tests.styles';

interface Props {
  total: number;
  correct: number;
}

export const FinalScoreComponent: React.FC<Props> = props => {
  const { total, correct } = props;
  const history = useHistory();

  const handleNavigatetoMain = () => {
    history.push(routes.root);
  };

  const {
    title,
    mainContainer,
    backContainer,
    pictureContainer,
    picture,
    nextBtn,
    arrowIcon,
    backgroundResult1,
    backgroundResult2,
    backgroundResult3,
    backgroundResult4,
  } = classes;

  const resultClass = () => {
    if (correct/total >= 0.9) {
      return backgroundResult1;
    } else if (correct/total >= 0.7) {
      return backgroundResult2;
    } else if (correct/total >= 0.5) {
      return backgroundResult3;
    } else {
      return backgroundResult4;
    }
  };

  const resultIcon = () => {
    if (correct/total >= 0.9) {
      return "trophy.png";
    } else if (correct/total >= 0.7) {
      return "well-done.png";
    } else if (correct/total >= 0.5) {
      return "reading.png";
    } else {
      return "skull.png";
    }
  }

  const resultMessage = () => {
    if (correct/total >= 0.9) {
      return (
        <h5 className={title}>
          Congratulations!!! You did a great job
        </h5>
      );
    } else if (correct/total >= 0.7) {
      return (
        <h5 className={title}>
          You are on the right track!
        </h5>
      );
    } else if (correct/total >= 0.5) {
      return (
        <h5 className={title}>
          Keep working!
        </h5>
      );
    } else {
      return (
        <h5 className={title}>
          You should study more...
        </h5>
      );
    }
  };

  return (
    <div className={mainContainer}>
      <div className={`${backContainer} ${resultClass()}`}>
        <div className={pictureContainer}>
          <img className={picture} src={`/assets/results/${resultIcon()}`}></img>
        </div>
        <div>
          <h5 className={title}>
            Final score:
          </h5>
          <h5 className={title}>
            <span>{`${correct}/${total}`}</span>
          </h5>
          {resultMessage()}
        </div>
      </div>
      <Button
        className={nextBtn}
        variant="contained"
        color="primary"
        onClick={handleNavigatetoMain}
      >
        Back to main
        <ArrowForwardIcon className={arrowIcon} />
      </Button>
    </div>
  );
};
