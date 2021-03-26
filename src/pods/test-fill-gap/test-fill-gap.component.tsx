import * as React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Verb, VerbTenses, VerbQuiz, createDefaultVerbQuiz } from "./test-fill-gap.vm";
import { Formik, Form } from 'formik';
import { GapComponent, ShowResultsComponent } from './components';
import { answerIsCorrect } from './test-fill-gap.business';
import * as styles from './test-fill-gap.styles';

interface Props {
  currentQuestion: number;
  totalQuestions: number;
  onNextQuestion: () => void;
  verb: Verb;
  score: number;
  setScore: (value: number) => void;
}

export const TestFillGapComponent: React.FC<Props> = props => {
  const {
    currentQuestion,
    totalQuestions,
    onNextQuestion,
    verb,
    score,
    setScore,
  } = props;

  const [isCorrect, setIsCorrect] = React.useState(false);
  const [validated, setValidated] = React.useState(false);

  const [initialQuiz, setInitialQuiz] = React.useState<VerbQuiz>(
    createDefaultVerbQuiz()
  );

  const {
    title,
    mainContainer,
    inputContainer,
    backContainer,
    pictureContainer,
    picture,
    insideBtnContainer,
    nextBtn,
    arrowIcon,
  } = styles;

  const handleValidateAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setIsCorrect(isCorrect);
    setValidated(true);
  };

  const internalHandleOnNextQuestion = () => {
    setValidated(false);
    onNextQuestion();
  }

  return (
    <main className={mainContainer}>
      <h1 className={title}>
        {verb.translation} ({`${currentQuestion} / ${totalQuestions}`})
      </h1>
      <Formik
        onSubmit={(values, actions) => {
          const isCorrect = answerIsCorrect(verb, values);
          handleValidateAnswer(isCorrect);
          const reset = createDefaultVerbQuiz();
          actions.resetForm({ values: reset });
          setInitialQuiz(reset);
        }}
        initialValues={initialQuiz}
      >
        {() => (
          <Form>
            {!validated && (
              <div className={backContainer}>
                <div className={pictureContainer}>
                  <img
                    className={picture}
                    src={`/assets/verb-images/${verb.infinitive}.png`}
                  />
                </div>
                <div className={inputContainer}>
                  <GapComponent
                    isGap={initialQuiz.tense === VerbTenses.infinitive}
                    text={verb.infinitive}
                    tense={"Infinitive"}
                  />
                  <GapComponent
                    isGap={initialQuiz.tense === VerbTenses.past}
                    text={verb.past}
                    tense={"Past"}
                  />
                  <GapComponent
                    isGap={initialQuiz.tense === VerbTenses.participle}
                    text={verb.participle}
                    tense={"Participle"}
                  />
                </div>
              </div>
            )}
            {validated ? (
              <>
                <ShowResultsComponent isCorrect={isCorrect} verb={verb} />

                <Button
                  className={nextBtn}
                  onClick={internalHandleOnNextQuestion}
                  variant="contained"
                >
                  <div className={insideBtnContainer}>
                    <span>Next Verb</span>
                    <ArrowForwardIcon className={arrowIcon} />
                  </div>
                </Button>
              </>
            ) : (
                <Button
                  className={nextBtn}
                  type="submit"
                  variant="contained"
                  disableElevation
                >
                  <div className={insideBtnContainer}>
                    Next <ArrowForwardIcon className={arrowIcon} />
                  </div>
                </Button>
              )}
          </Form>
        )}
      </Formik>
    </main>
  )
};
