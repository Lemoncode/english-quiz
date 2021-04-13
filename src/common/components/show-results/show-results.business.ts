import { VerbCorrect } from 'common/model';

export const generateHint = (verbCorrect: VerbCorrect) => {
  // TODO: Magic consts move to upper const file
  const infinitive = !verbCorrect.infinitive ? 'infinitive' : '';
  const past = !verbCorrect.past ? 'past' : '';
  const participle = !verbCorrect.participle ? 'participle' : '';

  return removeBeginningAndTrailingCommaIfExists(
    `${infinitive}, ${past}, ${participle}`
  );
};

const removeBeginningAndTrailingCommaIfExists = (hint: string) => {
  hint = hint.trim();
  hint = hint.replace(', ,', ','); //To remove double comma
  hint = hint[0] === ',' ? hint.substring(2, hint.length) : hint; //To remove beginning comma
  hint =
    hint[hint.length - 1] === ',' ? hint.substring(0, hint.length - 1) : hint; //To remove trailing comma
  return hint;
};
