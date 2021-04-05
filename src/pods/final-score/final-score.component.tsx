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
    bg1,
    bg2,
    bg3,
    bg4,
  } = classes;

  const resultClasses = (total, correct) => {
    let resultClassColor;

    if (correct >= total * 0.9) {
      resultClassColor = bg1;
    } else if (correct > total * 0.5 && correct <= total * 0.7) {
      resultClassColor = bg3;
    } else if (correct > total * 0.7 && correct < total * 0.9) {
      resultClassColor = bg4;
    } else {
      resultClassColor = bg2;
    }

    return resultClassColor;
  };

  const resultSentences = (total, correct) => {
    let resultSentence;

    if (correct >= total * 0.9) {
      resultSentence = (
        <Typography variant="h5" className={title}>
          Perfect!!!!!
        </Typography>
      );
    } else if (correct > total * 0.5 && correct <= total * 0.7) {
      resultSentence = (
        <Typography variant="h5" className={title}>
          Should Improve!!!
        </Typography>
      );
    } else if (correct > total * 0.7 && correct < total * 0.9) {
      resultSentence = (
        <Typography variant="h5" className={title}>
          Need a little to be Perfect!!!
        </Typography>
      );
    } else {
      resultSentence = (
        <Typography variant="h5" className={title}>
          This is not OK!!!
        </Typography>
      );
    }

    return resultSentence;
  };

  return (
    <div className={mainContainer}>
      <div className={`${backContainer} ${resultClasses(total, correct)}`}>
        <div className={pictureContainer}>
          <img className={picture} src={`/assets/results/treasure.png`}></img>
        </div>
        <div>
          <Typography variant="h5" className={title}>
            Your Final score:
          </Typography>
          <Typography variant="h5" className={title}>
            <span>{`${correct}/${total}`}</span>
          </Typography>
          {resultSentences(total, correct)}
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
