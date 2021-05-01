import * as React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { VerbQuiz, createDefaultVerbQuiz } from './test-multiple-choice.vm';
import { Formik, Form, Field } from 'formik';
import { ShowResults } from 'common/components/show-results';
import { Verb, VerbCorrect, createDefaultVerbCorrect } from 'common/model';
import { answerIsCorrect } from './test-multiple-choice.business';
import * as styles from 'common/styles/tests.styles';
import { TestsNavbar } from 'common/components';
import { FormControlLabel, Radio } from '@material-ui/core';

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

  const [options, setOptions] = React.useState<Verb[]>([]);

  React.useEffect(() => {
    setOptions(mixOptions([verb, otherOption1, otherOption2]));
  }, [verb]);

  const {
    mainContainer,
    backContainer,
    pictureContainer,
    picture,
    title,
    nextBtn,
    insideBtnContainer,
    arrowIcon,
    optionItem,
    optionsList,
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

  const mixOptions = (options: Verb[]) => {
    for (let i = options.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  };

  return (
    <main className={mainContainer}>
      <TestsNavbar score={score} currentQuestion={currentQuestion} />
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
              <>
                <div className={backContainer}>
                  <div className={pictureContainer}>
                    <img
                      className={picture}
                      src={`/assets/verb-images/${verb.infinitive}.png`}
                    ></img>
                  </div>
                  <ul className={optionsList}>
                    {options.map((option: Verb, index: number) => (
                      <li className={optionItem} key={`verb-${index}`}>
                        <Field
                          name="response"
                          value={option.infinitive}
                          type="radio"
                        >
                          {({ field }) => (
                            <FormControlLabel
                              control={<Radio {...field} color="primary" />}
                              label={`${option.infinitive}/${option.past}/${option.participle}`}
                            />
                          )}
                        </Field>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
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
              <>
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
              </>
            )}
          </Form>
        )}
      </Formik>
    </main>
  );
};
