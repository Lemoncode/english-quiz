import * as React from 'react';
import Button from '@material-ui/core/Button';
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
    setIsCorrect(true);
    setValidated(true);
  };

  const internalHandleOnNextQuestion = () => {
    setInitialQuiz(createDefaultVerbQuiz());
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
          actions.resetForm({ values: createDefaultVerbQuiz() })
        }}
        initialValues={initialQuiz}
      >
        {() => (
          <Form>
            {!validated ? (
              <>
                <div>
                  <span>{verb.translation}</span>
                  <GapComponent isGap={initialQuiz.tense === VerbTenses.infinitive} text={verb.infinitive} />
                  <GapComponent isGap={initialQuiz.tense === VerbTenses.past} text={verb.past} />
                  <GapComponent isGap={initialQuiz.tense === VerbTenses.participle} text={verb.participle} />
                </div>

                <Button type="submit" variant="contained" color="primary">
                  Validate
              </Button>
              </>
            ) : (
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
              )}
          </Form>
        )}
      </Formik>
    </div>
  )
};