import { VerbQuiz, VerbTenses } from './test-fill-gap.vm';
import { Verb } from 'common/model';
import { answerIsCorrect } from './test-fill-gap.business';

describe('Test fill gap business specs', () => {
  describe('answerIsCorrect function', () => {
    it('Should be incorrect when tense is infinitive and is not correct', () => {
      //Arrange
      const verb:Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz:VerbQuiz = {
        response: '',
        tense: VerbTenses.infinitive,
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.infinitive).toBeFalsy();
      expect(verbCorrect.all).toBeFalsy();
    });

    it('Should be correct when tense is infinitive and is correct', () => {
      //Arrange
      const verb:Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz:VerbQuiz = {
        response: 'eat',
        tense: VerbTenses.infinitive,
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.infinitive).toBeTruthy();
      expect(verbCorrect.all).toBeTruthy();
    });

    it('Should be incorrect when tense is past and is not correct', () => {
      //Arrange
      const verb:Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz:VerbQuiz = {
        response: '',
        tense: VerbTenses.past,
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.past).toBeFalsy();
      expect(verbCorrect.all).toBeFalsy();
    });

    it('Should be correct when tense is past and is correct', () => {
      //Arrange
      const verb:Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz:VerbQuiz = {
        response: 'ate',
        tense: VerbTenses.past,
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.past).toBeTruthy();
      expect(verbCorrect.all).toBeTruthy();
    });

    it('Should be incorrect when tense is participle and is not correct', () => {
      //Arrange
      const verb:Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz:VerbQuiz = {
        response: '',
        tense: VerbTenses.participle,
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.participle).toBeFalsy();
      expect(verbCorrect.all).toBeFalsy();
    });

    it('Should be correct when tense is participle and is correct', () => {
      //Arrange
      const verb:Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz:VerbQuiz = {
        response: 'eaten',
        tense: VerbTenses.participle,
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.participle).toBeTruthy();
      expect(verbCorrect.all).toBeTruthy();
    });
  });
});