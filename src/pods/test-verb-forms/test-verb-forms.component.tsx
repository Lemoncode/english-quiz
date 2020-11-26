import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
  Verb,
  VerbQuiz,
  createDefaultVerbQuiz,
  VerbCorrect,
  createDefaultVerbCorrect,
} from './test-verb-forms.vm';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { answerIsCorrect } from './test-verb-forms.business';
import { ShowResults } from './components';
import * as classes from './test-verb-forms.styles';

interface Props {
  currentQuestion: number;
  totalQuestions: number;
  onNextQuestion: () => void;
  verb: Verb;
  score: number;
  setScore: (value: number) => void;
  hasSecondChance: boolean;
}

export const TestVerbFormComponent: React.FC<Props> = props => {
  const {
    currentQuestion,
    totalQuestions,
    onNextQuestion,
    verb,
    score,
    setScore,
    hasSecondChance,
  } = props;
  const [verbCorrect, setVerbCorrect] = React.useState<VerbCorrect>(
    createDefaultVerbCorrect()
  );
  const [validated, setValidated] = React.useState(false);
  const [secondAttempt, setSecondAttempt] = React.useState(false);

  const [initialQuiz, setInitialQuiz] = React.useState<VerbQuiz>(
    createDefaultVerbQuiz()
  );

  const { insideBtnContainer, nextBtn, arrowIcon } = classes;

  const handleValidateAnswer = (isCorrect: VerbCorrect) => {
    if (isCorrect.all) {
      if (secondAttempt) {
        setScore(score + 0.5);
      } else {
        setScore(score + 1);
      }
    }
    setVerbCorrect(isCorrect);
    setValidated(true);
  };

  const internalHandleOnNextQuestion = () => {
    setInitialQuiz(createDefaultVerbQuiz());
    setValidated(false);
    setSecondAttempt(false);
    setVerbCorrect(createDefaultVerbCorrect());
    onNextQuestion();
  };

  const handleSecondAttempt = () => {
    setValidated(false);
    setSecondAttempt(true);
  };

  return (
    <div>
      <h1>Question {`${currentQuestion} / ${totalQuestions}`}</h1>
      <Formik
        onSubmit={(values, actions) => {
          const isCorrect = answerIsCorrect(verb, values);
          handleValidateAnswer(isCorrect);
          if (!hasSecondChance || secondAttempt || isCorrect.all) {
            actions.resetForm({ values: createDefaultVerbQuiz() });
          }
          if (hasSecondChance && !secondAttempt) {
            if (!isCorrect.infinitive)
              actions.setFieldError('infinitive', 'Incorrect');
            if (!isCorrect.past) actions.setFieldError('past', 'Incorrect');
            if (!isCorrect.participle)
              actions.setFieldError('participle', 'Incorrect');
          }
        }}
        initialValues={initialQuiz}
      >
        {() => (
          <Form>
            {!validated && (
              <div>
                <img
                  src={`/assets/verb-images/${verb.infinitive}.png`}
                  height="300"
                  width="300"
                ></img>
                <h2>{verb.translation}</h2>
                <TextFieldComponent name="infinitive" label="infinitive" />
                <TextFieldComponent name="past" label="Past" />
                <TextFieldComponent name="participle" label="Participle" />
              </div>
            )}
            {validated &&
            (!hasSecondChance || secondAttempt || verbCorrect.all) ? (
              <>
                <ShowResults
                  secondAttempt={true}
                  verbCorrect={verbCorrect}
                  verb={verb}
                />

                <Button
                  onClick={internalHandleOnNextQuestion}
                  variant="contained"
                  color="primary"
                >
                  Next verb
                </Button>
              </>
            ) : validated && !secondAttempt ? (
              <>
                <ShowResults
                  secondAttempt={false}
                  verbCorrect={verbCorrect}
                  verb={verb}
                />

                <Button
                  onClick={handleSecondAttempt}
                  variant="contained"
                  color="primary"
                >
                  Try again
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
    </div>
  );
};
