import * as React from 'react';
import { Verb, VerbCorrect } from '../test-verb-forms.vm';
import { generateHint } from '../test-verb-forms.business';
import * as classes from './show-results.component.styles';

interface Props {
  secondAttempt: boolean;
  verbCorrect: VerbCorrect;
  verb: Verb;
}

export const ShowResults: React.FC<Props> = props => {
  const {
    backContainer,
    pictureContainer,
    picture,
    insideBtnContainer,
    buttonRight,
    buttonWrong,
    verbsForm,
    answer,
    insideRightAnswer,
    insideBtn
  } = classes;

  const { secondAttempt, verbCorrect, verb } = props;
  return verbCorrect.all ? (
    <div className={backContainer}>
      <div className={pictureContainer}>
        <img
          className={picture}
          src={`/assets/verb-images/${verb.infinitive}.png`}
        />
      </div>
      <div className={insideRightAnswer}>
        <div className={`${insideBtnContainer} ${buttonRight}`}>
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
    </div>
  ) : !secondAttempt ? (
    <span>
      You have a second chance. You failed in {generateHint(verbCorrect)}.
    </span>
  ) : (
    <div className={backContainer}>
      <div className={pictureContainer}>
        <img
          className={picture}
          src={`/assets/verb-images/${verb.infinitive}.png`}
        ></img>
      </div>
      <div className={buttonWrong}>
        <div className={insideBtn}>
          <span>Nope, Right</span>
        </div>
      </div>
      <div>
        <span className={answer}>Answer</span>
        <span className={verbsForm}>Infinite: {verb.infinitive}</span>
        <span className={verbsForm}>Past: {verb.past}</span>
        <span className={verbsForm}>participle: {verb.participle}</span>
        <span className={verbsForm}>translation: {verb.translation}</span>
      </div>
    </div>
  );
};
