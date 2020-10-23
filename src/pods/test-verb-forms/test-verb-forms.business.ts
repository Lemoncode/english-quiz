import { VerbEntityGlobal } from 'core/verbs';
import { Verb, VerbQuiz, VerbCorrect, createDefaultVerbCorrect } from './test-verb-forms.vm';

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
  past: quiz.past.toLowerCase(),
  participle: quiz.participle.toLowerCase(),
  infinitive: quiz.infinitive.toLowerCase(),
});

export const answerIsCorrect = (verb: Verb, quiz: VerbQuiz): VerbCorrect => {
  const verbLower = verbToLower(verb);
  const quizLower = quizToLower(quiz);

  let verbCorrect = createDefaultVerbCorrect();
  verbCorrect.infinitive = verbLower.infinitive === quizLower.infinitive;
  verbCorrect.past = verbLower.past === quizLower.past;
  verbCorrect.participle = verbLower.participle === quizLower.participle;
  verbCorrect.all = verbCorrect.infinitive && verbCorrect.past && verbCorrect.participle;
  return verbCorrect;
};

export const generateHint = (verbCorrect: VerbCorrect) => {
  let hint = "";
  if (!verbCorrect.infinitive) hint+="infinitive, ";
  if (!verbCorrect.past) hint+="past, ";
  if (!verbCorrect.participle) hint+="participle";

  // Trim the last part if it ends on ", "
  if (hint[hint.length-2] === ',') hint = hint.substring(0, hint.length-2);

  return hint;
};
