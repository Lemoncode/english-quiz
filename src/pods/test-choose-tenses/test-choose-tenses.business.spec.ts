import { VerbQuiz } from './test-choose-tenses.vm';
import { Verb } from 'common/model';
import { ChooseTenses } from 'core/choose-tenses';
import { answerIsCorrect } from './test-choose-tenses.business';

describe('Test choose tenses business specs', () => {
  describe('answerIsCorrect function', () => {
    it('Should be incorrect when all selected tenses are not correct', () => {
      //Arrange
      const verb: Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz: VerbQuiz = {
        infinitive: '',
        past: '',
        participle: '',
      };
      const chooseTenses: ChooseTenses = {
        hasInfinitive: false,
        hasPast: true,
        hasParticiple: true,
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz, chooseTenses);

      //Assert
      expect(verbCorrect.infinitive).toBeTruthy();
      expect(verbCorrect.past).toBeFalsy();
      expect(verbCorrect.participle).toBeFalsy();
      expect(verbCorrect.all).toBeFalsy();
    });

    it('Should be incorrect when one selected tense is not correct', () => {
      //Arrange
      const verb: Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz: VerbQuiz = {
        infinitive: '',
        past: 'ate',
        participle: '',
      };
      const chooseTenses: ChooseTenses = {
        hasInfinitive: false,
        hasPast: true,
        hasParticiple: true,
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz, chooseTenses);

      //Assert
      expect(verbCorrect.infinitive).toBeTruthy();
      expect(verbCorrect.past).toBeTruthy();
      expect(verbCorrect.participle).toBeFalsy();
      expect(verbCorrect.all).toBeFalsy();
    });

    it('Should be correct when all selected tenses are correct', () => {
      //Arrange
      const verb: Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz: VerbQuiz = {
        infinitive: '',
        past: 'ate',
        participle: 'eaten',
      };
      const chooseTenses: ChooseTenses = {
        hasInfinitive: false,
        hasPast: true,
        hasParticiple: true,
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz, chooseTenses);

      //Assert
      expect(verbCorrect.infinitive).toBeTruthy();
      expect(verbCorrect.past).toBeTruthy();
      expect(verbCorrect.participle).toBeTruthy();
      expect(verbCorrect.all).toBeTruthy();
    });
  });
});
