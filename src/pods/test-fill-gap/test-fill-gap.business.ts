import { VerbEntityGlobal } from 'core/verbs';
import { VerbQuiz, VerbTenses } from './test-fill-gap.vm';
import { Verb, VerbCorrect, createDefaultVerbCorrect } from 'common/model';
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

export const answerIsCorrect = (verb: Verb, quiz: VerbQuiz): VerbCorrect => {
  const verbLower = lowObject(verb);
  const quizTrimmed = trimObject(quiz, ['response']);
  const quizLower = lowObject(quizTrimmed, ['response']);

  let verbCorrect = createDefaultVerbCorrect();
  verbCorrect.infinitive =
    quizLower.tense === VerbTenses.infinitive
      ? verbLower.infinitive === quizLower.response
      : true;
  verbCorrect.past =
    quizLower.tense === VerbTenses.past
      ? verbLower.past === quizLower.response
      : true;
  verbCorrect.participle =
    quizLower.tense === VerbTenses.participle
      ? verbLower.participle === quizLower.response
      : true;
  verbCorrect.all =
    verbCorrect.infinitive && verbCorrect.past && verbCorrect.participle;
  return verbCorrect;
};
