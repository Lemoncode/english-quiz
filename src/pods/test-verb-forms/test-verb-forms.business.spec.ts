import { VerbQuiz } from './test-verb-forms.vm';
import { Verb } from 'common/model';
import { answerIsCorrect } from './test-verb-forms.business';

describe('Test verb forms business specs', () => {
  describe('answerIsCorrect function', () => {
    it('Should be incorrect when everything is incorrect', () => {
      //Arrange
      const verb:Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz:VerbQuiz = {
        infinitive: '',
        past: '',
        participle: '',
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.infinitive).toBeFalsy();
      expect(verbCorrect.past).toBeFalsy();
      expect(verbCorrect.participle).toBeFalsy();
      expect(verbCorrect.all).toBeFalsy();
    });
    
    it('Should be incorrect when only infinitive is correct', () => {
      //Arrange
      const verb:Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz:VerbQuiz = {
        infinitive: 'eat',
        past: '',
        participle: '',
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.infinitive).toBeTruthy();
      expect(verbCorrect.past).toBeFalsy();
      expect(verbCorrect.participle).toBeFalsy();
      expect(verbCorrect.all).toBeFalsy();
    });

    it('Should be incorrect when only past is correct', () => {
      //Arrange
      const verb:Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz:VerbQuiz = {
        infinitive: '',
        past: 'ate',
        participle: '',
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.infinitive).toBeFalsy();
      expect(verbCorrect.past).toBeTruthy();
      expect(verbCorrect.participle).toBeFalsy();
      expect(verbCorrect.all).toBeFalsy();
    });

    it('Should be incorrect when only participle is correct', () => {
      //Arrange
      const verb:Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz:VerbQuiz = {
        infinitive: '',
        past: '',
        participle: 'eaten',
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.infinitive).toBeFalsy();
      expect(verbCorrect.past).toBeFalsy();
      expect(verbCorrect.participle).toBeTruthy();
      expect(verbCorrect.all).toBeFalsy();
    });

    it('Should be incorrect when only infinitive is incorrect', () => {
      //Arrange
      const verb:Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz:VerbQuiz = {
        infinitive: '',
        past: 'ate',
        participle: 'eaten',
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.infinitive).toBeFalsy();
      expect(verbCorrect.past).toBeTruthy();
      expect(verbCorrect.participle).toBeTruthy();
      expect(verbCorrect.all).toBeFalsy();
    });

    it('Should be incorrect when only past is incorrect', () => {
      //Arrange
      const verb:Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz:VerbQuiz = {
        infinitive: 'eat',
        past: '',
        participle: 'eaten',
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.infinitive).toBeTruthy();
      expect(verbCorrect.past).toBeFalsy();
      expect(verbCorrect.participle).toBeTruthy();
      expect(verbCorrect.all).toBeFalsy();
    });

    it('Should be incorrect when only participle is incorrect', () => {
      //Arrange
      const verb:Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz:VerbQuiz = {
        infinitive: 'eat',
        past: 'ate',
        participle: '',
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.infinitive).toBeTruthy();
      expect(verbCorrect.past).toBeTruthy();
      expect(verbCorrect.participle).toBeFalsy();
      expect(verbCorrect.all).toBeFalsy();
    });

    it('Should be correct when every tense is correct', () => {
      //Arrange
      const verb:Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz:VerbQuiz = {
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.infinitive).toBeTruthy();
      expect(verbCorrect.past).toBeTruthy();
      expect(verbCorrect.participle).toBeTruthy();
      expect(verbCorrect.all).toBeTruthy();
    });
  });
});