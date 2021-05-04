import { VerbEntityGlobal } from 'core/verbs';
import { VerbQuiz } from './test-multiple-choice.vm';
import { Verb } from 'common/model';
import {
  pickOtherOptions,
  answerIsCorrect,
} from './test-multiple-choice.business';

describe('Test multiple choice business specs', () => {
  describe('pickOtherOptions function', () => {
    it('Should return an empty array when verbCollection is empty', () => {
      //Arrange
      const rightOption = {};
      const selectedVerbs = [];
      const verbs = [];

      //Act
      const options = pickOtherOptions(<Verb>rightOption, selectedVerbs, verbs);

      //Assert
      expect(Array.isArray(options)).toBeTruthy();
      expect(options.length).toBe(0);
    });

    it('Should pick two different verbs from selected list other than the right option', () => {
      //Arrange
      const rightOption: Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const selectedVerbs = ['eat', 'drink', 'swim'];
      const verbs: VerbEntityGlobal[] = [
        {
          translation: 'comer',
          infinitive: 'eat',
          past: 'ate',
          participle: 'eaten',
        },
        {
          translation: 'beber',
          infinitive: 'drink',
          past: 'drank',
          participle: 'drunk',
        },
        {
          translation: 'dormir',
          infinitive: 'sleep',
          past: 'slept',
          participle: 'slept',
        },
        {
          translation: 'nadar',
          infinitive: 'swim',
          past: 'swam',
          participle: 'swum',
        },
      ];

      //Act
      const options = pickOtherOptions(rightOption, selectedVerbs, verbs);

      //Assert
      expect(options.length).toBe(2);
      expect(options[0].infinitive !== verbs[2].infinitive).toBeTruthy();
      expect(options[1].infinitive !== verbs[2].infinitive).toBeTruthy();
      expect(selectedVerbs.includes(options[0].infinitive)).toBeTruthy();
      expect(selectedVerbs.includes(options[1].infinitive)).toBeTruthy();
      expect(options[0].infinitive !== rightOption.infinitive).toBeTruthy();
      expect(options[1].infinitive !== rightOption.infinitive).toBeTruthy();
      expect(options[0].infinitive !== options[1].infinitive).toBeTruthy();
    });
  });

  describe('answerIsCorrect function', () => {
    it('Should return false when answer is not correct', () => {
      //Arrange
      const verb: Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz: VerbQuiz = {
        response: 'drink',
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.all).toBeFalsy();
    });

    it('Should return true when answer is correct', () => {
      //Arrange
      const verb: Verb = {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      };
      const quiz: VerbQuiz = {
        response: 'eat',
      };

      //Act
      const verbCorrect = answerIsCorrect(verb, quiz);

      //Assert
      expect(verbCorrect.all).toBeTruthy();
    });
  });
});
