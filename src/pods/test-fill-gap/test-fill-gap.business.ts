import { VerbEntityGlobal } from 'core/verbs';
import { Verb, VerbQuiz, VerbTenses } from './test-fill-gap.vm';

// TODO: maybe add some defensive programming here? edge cases / errors ?
export const pickRandomVerb = (
  selectedVerbs: string[],
  verbs: VerbEntityGlobal[]
): Verb => {
  const allVerbs = selectedVerbs.length === 0;
  const arrayLength = allVerbs ? verbs.length : selectedVerbs.length;
  const index = Math.floor(Math.random() * arrayLength);

  const verb = allVerbs
    ? verbs[index]
    : verbs.find(verb => verb.infinitive === selectedVerbs[index]);

  // TODO: we should create a separate mapper for this
  return {
    ...verb,
  };
};

const verbToLower = (verb: Verb): Verb => ({
  infinitive: verb.infinitive.toLowerCase(),
  past: verb.past.toLowerCase(),
  participle: verb.participle.toLowerCase(),
  translation: verb.translation.toLowerCase(),
});

const quizToLower = (quiz: VerbQuiz) => ({
  ...quiz,
  response: quiz.response.toLowerCase(),
});

export const answerIsCorrect = (verb: Verb, quiz: VerbQuiz): boolean => {
  const verbLower = verbToLower(verb);
  const quizLower = quizToLower(quiz);

  return quizLower.tense === VerbTenses.infinitive ? verbLower.infinitive === quizLower.response :
    quizLower.tense === VerbTenses.past ? verbLower.past === quizLower.response :
      verbLower.participle === quizLower.response;
};