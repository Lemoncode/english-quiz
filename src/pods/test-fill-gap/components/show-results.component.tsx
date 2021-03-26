import * as React from 'react';
import { Verb } from '../test-fill-gap.vm';
import * as styles from './components.styles';

interface Props {
  isCorrect: boolean;
  verb: Verb;
}

export const ShowResultsComponent: React.FC<Props> = props => {
  const { isCorrect, verb } = props;
  const {
    backContainer,
    pictureContainer,
    picture,
    buttonRight,
    insideRightAnswer,
    buttonWrong,
    verbsForm,
    answer,
    insideBtn,
  } = styles;

  return (
    <div className={backContainer}>
      <div className={pictureContainer}>
        <img
          className={picture}
          src={`/assets/verb-images/${verb.infinitive}.png`}
        />
      </div>
      {isCorrect ? (
        <div className={insideRightAnswer}>
          <div className={buttonRight}>
            <span>RIGHT !!!!</span>
          </div>
          <div>
            <img
              className={picture}
              src={`/assets/right-answer/right.png`}
              alt=""
            />
          </div>
        </div>
      ) : (
        <>
          <div className={buttonWrong}>
            <div className={insideBtn}>
              <span>Oops... nope</span>
            </div>
          </div>
          <div>
            <span className={answer}>Answer</span>
            <span className={verbsForm}>Infinite: {verb.infinitive}</span>
            <span className={verbsForm}>Past: {verb.past}</span>
            <span className={verbsForm}>participle: {verb.participle}</span>
            <span className={verbsForm}>translation: {verb.translation}</span>
          </div>
        </>
      )}
    </div>
  );
};
