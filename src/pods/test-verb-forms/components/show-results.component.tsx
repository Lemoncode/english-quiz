import * as React from 'react';
import { Verb, VerbCorrect } from '../test-verb-forms.vm';
import { generateHint } from '../test-verb-forms.business';
import * as classes from 'common/styles/tests.styles';

interface Props {
  secondAttempt: boolean;
  verbCorrect: VerbCorrect;
  verb: Verb;
}

export const ShowResults: React.FC<Props> = props => {
  const { secondAttempt, verbCorrect, verb } = props;
  
  return verbCorrect.all ? 
         (<ShowResultCorrect verb={verb}/>) : 
         !secondAttempt ? 
         (<ShowSecondChance verbCorrect={verbCorrect}/>) :
         (<ShowResultWrong verb={verb}/>);
};


//TODO: Move interface and component to a common-app folder. Rename Props_ResultCorrect as Props and import styles in the new file.
interface Props_ResultCorrect {
  verb: Verb;
}
const ShowResultCorrect: React.FC<Props_ResultCorrect> = props => {
  const {
    backContainer,
    pictureContainer,
    picture,
    buttonRight,
    insideRightAnswer,
  } = classes;

  return (
    <div className={backContainer}>
      <div className={pictureContainer}>
        <img
          className={picture}
          src={`/assets/verb-images/${props.verb.infinitive}.png`}
        />
      </div>
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
    </div>
  );
}


//TODO: Move interface and component to a common-app folder. Rename Props_SecondChance as Props in the new file.
interface Props_SecondChance {
  verbCorrect: VerbCorrect;
}
const ShowSecondChance: React.FC<Props_SecondChance> = props => {
  return (
    <span>
      You have a second chance. You failed in {generateHint(props.verbCorrect)}.
    </span>
  ); 
}


//TODO: Move interface and component to a common-app folder. Rename Props_SecondChance as Props and import styles in the new file.
interface Props_ResultWrong {
  verb: Verb;
}
const ShowResultWrong: React.FC<Props_ResultWrong> = props => {
  const {verb} = props;
  const {
    backContainer,
    pictureContainer,
    picture,
    buttonWrong,
    verbsForm,
    answer,
    insideBtn,
  } = classes;
  
  return (
    <div className={backContainer}>
      <div className={pictureContainer}>
        <img
          className={picture}
          src={`/assets/verb-images/${verb.infinitive}.png`}
        ></img>
      </div>
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
    </div>
  );
}