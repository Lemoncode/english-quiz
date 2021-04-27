import * as React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { VerbQuiz, createDefaultVerbQuiz } from './test-multiple-choice.vm';
import { Formik, Form, Field } from 'formik';
import { ShowResults } from 'common/components/show-results';
import { Verb, VerbCorrect, createDefaultVerbCorrect } from 'common/model';
import { answerIsCorrect } from './test-multiple-choice.business';
import * as styles from 'common/styles/tests.styles';

interface Props {
  currentQuestion: number;
  totalQuestions: number;
  onNextQuestion: () => void;
  verb: Verb;
  otherOption1: Verb;
  otherOption2: Verb;
  score: number;
  setScore: (value: number) => void;
}

export const TestMultipleChoiceComponent: React.FC<Props> = props => {
  const {
    currentQuestion,
    totalQuestions,
    onNextQuestion,
    verb,
    otherOption1,
    otherOption2,
    score,
    setScore,
  } = props;

  const [verbCorrect, setVerbCorrect] = React.useState<VerbCorrect>(
    createDefaultVerbCorrect()
  );
  const [validated, setValidated] = React.useState(false);

  const [initialQuiz, setInitialQuiz] = React.useState<VerbQuiz>(
    createDefaultVerbQuiz()
  );

  const {
    nextBtn,
    insideBtnContainer,
    arrowIcon,
  } = styles;

  const handleValidateAnswer = (verbCorrection: VerbCorrect) => {
    if (verbCorrection.all) {
      setScore(score + 1);
    }
    setVerbCorrect(verbCorrection);
    setValidated(true);
  };

  const internalHandleOnNextQuestion = () => {
    setValidated(false);
    onNextQuestion();
  };

  return (
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
            <select name="response" id="response">
              <option value={verb.infinitive}>
                {`${verb.infinitive}/${verb.past}/${verb.participle}`}
              </option>
              <option value={otherOption1.infinitive}>
                {`${otherOption1.infinitive}/${otherOption1.past}/${otherOption1.participle}`}
              </option>
              <option value={otherOption2.infinitive}>
                {`${otherOption2.infinitive}/${otherOption2.past}/${otherOption2.participle}`}
              </option>
            </select>
          )}
          {validated ? (
            <>
              <ShowResults
                secondAttemptEnabled={false}
                isSecondAttempt={false}
                verbCorrect={verbCorrect}
                verb={verb}
              />

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
            <button type="submit">Next</button>
          )}
        </Form>
      )}
    </Formik>
  );
}