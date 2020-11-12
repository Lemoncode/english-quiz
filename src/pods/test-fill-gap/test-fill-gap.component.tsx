import * as React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Verb, VerbTenses, VerbQuiz, createDefaultVerbQuiz } from "./test-fill-gap.vm";
import { Formik, Form } from 'formik';
import { GapComponent, ShowResultsComponent } from './components';
import { answerIsCorrect } from './test-fill-gap.business';

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
    <div>
      <h1>Question {`${currentQuestion} / ${totalQuestions}`}</h1>
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
              <div>
                <Typography variant="subtitle1">
                  Translation: {verb.translation}
                </Typography>
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
            )}
            {validated ? (
              <>
                <ShowResultsComponent isCorrect={isCorrect} verb={verb} />

                <Button
                  onClick={internalHandleOnNextQuestion}
                  variant="contained"
                  color="primary"
                >
                  Next verb
                </Button>
              </>
            ) : (
                <Button type="submit" variant="contained" color="primary">
                  Validate
                </Button>
              )}
          </Form>
        )}
      </Formik>
    </div>
  )
};
