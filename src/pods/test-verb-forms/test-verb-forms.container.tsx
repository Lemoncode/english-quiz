import * as React from 'react';
import { TestVerbFormComponent } from './test-verb-forms.component';
import { Verb, VerbQuiz } from './test-verb-forms.vm';
import { globalVerbsContext } from 'core/verbs';
import { pickRandomVerb } from './test-verb-forms.business';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import { scoreContext } from 'core/score';

// TODO: Move to const this could be configured maybe in profile context
const totalQuestions = 15;

export const TestVerbFormContainer = () => {
  const history = useHistory();
  const { selectedVerbs, verbCollection } = React.useContext(
    globalVerbsContext
  );
  const { setScore } = React.useContext(scoreContext);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [currentVerb, setCurrentVerb] = React.useState<Verb>({
    infinitive: '',
    participle: '',
    past: '',
    translation: '',
  });
  const [currentScore, setCurrentScore] = React.useState(0);

  React.useEffect(() => {
    setScore({ totalQuestions, answeredCorrectly: 0 });
  }, []);

  React.useEffect(() => {
    // TODO:: if we havent' reached the top calculate new question
    if (currentQuestion !== totalQuestions) {
      const randomVerb = pickRandomVerb(selectedVerbs, verbCollection);
      setCurrentVerb(randomVerb);
    }
  }, [currentQuestion]);

  const handleSetNextQuestion = () => {
    if (currentQuestion !== totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScore({ totalQuestions, answeredCorrectly: currentScore });
      history.push(routes.finalScore);
    }
  };

  return (
    <TestVerbFormComponent
      currentQuestion={currentQuestion}
      totalQuestions={totalQuestions}
      onNextQuestion={handleSetNextQuestion}
      verb={currentVerb}
      score={currentScore}
      setScore={setCurrentScore}
    />
  );
};
