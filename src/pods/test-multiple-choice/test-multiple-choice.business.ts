import { VerbEntityGlobal } from 'core/verbs';
import { VerbQuiz } from './test-multiple-choice.vm';
import { Verb, VerbCorrect, createDefaultVerbCorrect } from 'common/model';

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
  let verbCorrect = createDefaultVerbCorrect();
  verbCorrect.all = verb.infinitive === quiz.response;
  return verbCorrect;
};

export const mixOptions = (options: Verb[]) => {
  for (let i = options.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
};