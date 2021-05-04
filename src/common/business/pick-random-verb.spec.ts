import { VerbEntityGlobal } from 'core/verbs';
import { pickRandomVerb } from './pick-random-verb';

describe('pick-random-verb specs', () => {
  it('Should always return the same verb where there is only one on the list', () => {
    //Arrange
    const selectedVerbs = [];
    const verbs:VerbEntityGlobal[] = [
      {
        translation: 'comer',
        infinitive: 'eat',
        past: 'ate',
        participle: 'eaten',
      }
    ];
    
    //Act
    const verb = pickRandomVerb(selectedVerbs, verbs);

    //Assert
    expect(verb == verbs[0]).toBeFalsy();
    expect(verb.translation === verbs[0].translation).toBeTruthy();
    expect(verb.infinitive === verbs[0].infinitive).toBeTruthy();
    expect(verb.past === verbs[0].past).toBeTruthy();
    expect(verb.participle === verbs[0].participle).toBeTruthy();
  });

  it('Should always return the selected verb when there is only one selected', () => {
    //Arrange
    const selectedVerbs = ['drink'];
    const verbs:VerbEntityGlobal[] = [
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
      }
    ];

    //Act
    const verb = pickRandomVerb(selectedVerbs, verbs);
    
    //Assert
    expect(verb.infinitive === verbs[0].infinitive).toBeFalsy();
    expect(verb.translation === verbs[1].translation).toBeTruthy();
    expect(verb.infinitive === verbs[1].infinitive).toBeTruthy();
    expect(verb.past === verbs[1].past).toBeTruthy();
    expect(verb.participle === verbs[1].participle).toBeTruthy();
  });

  it('Should return one of the two selected verbs', () => {
    //Arrange
    const selectedVerbs = ['drink', 'sleep'];
    const verbs:VerbEntityGlobal[] = [
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
      }
    ];

    //Act
    const verb = pickRandomVerb(selectedVerbs, verbs);
    
    //Assert
    expect(verb.infinitive === verbs[0].infinitive).toBeFalsy();
    expect(
      verb.translation === verbs[1].translation ||
      verb.translation === verbs[2].translation
    ).toBeTruthy();
    expect(
      verb.infinitive === verbs[1].infinitive ||
      verb.infinitive === verbs[2].infinitive
    ).toBeTruthy();
    expect(
      verb.past === verbs[1].past ||
      verb.past === verbs[2].past
    ).toBeTruthy();
    expect(
      verb.participle === verbs[1].participle ||
      verb.participle === verbs[2].participle
    ).toBeTruthy();
  });
});