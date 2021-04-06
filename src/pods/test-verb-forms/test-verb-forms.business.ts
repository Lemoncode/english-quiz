import { VerbEntityGlobal } from 'core/verbs';
import { Verb, VerbQuiz, VerbCorrect, createDefaultVerbCorrect } from './test-verb-forms.vm';
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
  const quizTrimmed = trimObject(quiz);
  const quizLower = lowObject(quizTrimmed);

  let verbCorrect = createDefaultVerbCorrect();
  verbCorrect.infinitive = verbLower.infinitive === quizLower.infinitive;
  verbCorrect.past = verbLower.past === quizLower.past;
  verbCorrect.participle = verbLower.participle === quizLower.participle;
  verbCorrect.all = verbCorrect.infinitive && verbCorrect.past && verbCorrect.participle;
  return verbCorrect;
};

export const generateHint = (verbCorrect: VerbCorrect) => {
  // TODO: Magic consts move to upper const file
  const infinitive = (!verbCorrect.infinitive) ? 'infinitive' : '';
  const past = (!verbCorrect.past) ? 'past' : '';
  const participle = (!verbCorrect.participle) ? 'participle' : '';

  return removeBeginningAndTrailingCommaIfExists(`${infinitive}, ${past}, ${participle}`);
};

const removeBeginningAndTrailingCommaIfExists = (hint: string) => {
  hint = hint.trim();
  hint = hint.replace(", ,", ","); //To remove double comma
  hint = hint[0] === ',' ? hint.substring(2, hint.length) : hint; //To remove beginning comma
  hint = hint[hint.length - 1] === ',' ? hint.substring(0, hint.length - 1) : hint; //To remove trailing comma
  return hint;
}
