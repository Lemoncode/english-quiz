import { VerbEntityGlobal } from 'core/verbs';
import { Verb, VerbQuiz, VerbTenses } from './test-fill-gap.vm';
import { trimObject, lowObject } from 'common/business';

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

export const answerIsCorrect = (verb: Verb, quiz: VerbQuiz): boolean => {
  const verbLower = lowObject(verb);
  const quizTrimmed = trimObject(quiz, ['response']);
  const quizLower = lowObject(quizTrimmed, ['response']);

  return quizLower.tense === VerbTenses.infinitive ? verbLower.infinitive === quizLower.response :
    quizLower.tense === VerbTenses.past ? verbLower.past === quizLower.response :
      verbLower.participle === quizLower.response;
};