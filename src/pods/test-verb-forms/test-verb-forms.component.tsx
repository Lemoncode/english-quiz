import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Verb, VerbQuiz, createDefaultVerbQuiz } from './test-verb-forms.vm';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { answerIsCorrect } from './test-verb-forms.business';
import { ShowResults } from './components';

interface Props {
  currentQuestion: number;
  totalQuestions: number;
  onNextQuestion: () => void;
  verb: Verb;
  score: number;
  setScore: (value: number) => void;
}

export const TestVerbFormComponent: React.FC<Props> = props => {
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

  const handleValidateAnswer = (values: VerbQuiz) => {
    const isCorrect = answerIsCorrect(verb, values);
    if (isCorrect) {
      setScore(score + 1);
    }
    setIsCorrect(isCorrect);
    setValidated(true);
  };

  const internalHandleOnNextQuestion = () => {
    setInitialQuiz(createDefaultVerbQuiz());
    setValidated(false);
    onNextQuestion();
  };

  return (
    <div>
      <h1>Question {`${currentQuestion} / ${totalQuestions}`}</h1>
      <Formik
        onSubmit={(values, actions) => {
          handleValidateAnswer(values);
          actions.resetForm({ values: createDefaultVerbQuiz() });
        }}
        initialValues={initialQuiz}
      >
        {() => (
          <Form>
            {!validated && (
              <div>
                <span>{verb.translation}</span>
                <TextFieldComponent name="infinitive" label="infinitive" />
                <TextFieldComponent name="past" label="Past" />
                <TextFieldComponent name="participle" label="Participle" />
              </div>
            )}
            {validated ? (
              <>
                <ShowResults succeeded={isCorrect} verb={verb} />

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
  );
};
