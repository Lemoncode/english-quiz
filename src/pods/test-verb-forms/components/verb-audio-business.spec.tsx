import * as React from 'react';
import { prepareVoicesArray } from './verb-audio-business';

describe('Verb Audio business specs', () => {
  it('Should return an empty array if there´s no english voices', () => {
    //Arrange
    let noEnglishArray = [
      { lang: 'es-ES' },
      { lang: 'pt-BR' },
      { lang: 'ru-RU' },
    ];
    //Assert
    let result = prepareVoicesArray(noEnglishArray);

    //Act
    expect(result.length).toBe(0);
  });

  it('Should make GB english first option if available', () => {
    //Arrange
    let gbEnglishArray = [
      { lang: 'en-AU' },
      { lang: 'en-US' },
      { lang: 'en-GB' },
      { lang: 'en-CA' },
    ];
    //Assert
    let result = prepareVoicesArray(gbEnglishArray);

    //Act
    expect(result[0].lang).toBe('en-GB');
  });

  it('Should make US english first option if GB not available', () => {
    //Arrange
    let usEnglishArray = [
      { lang: 'en-AU' },
      { lang: 'en-US' },
      { lang: 'en-IN' },
      { lang: 'en-CA' },
    ];
    //Assert
    let result = prepareVoicesArray(usEnglishArray);

    //Act
    expect(result[0].lang).toBe('en-US');
  });

  it('Should only return english voices', () => {
    //Arrange
    let allLanguagesArray = [
      { lang: 'en-AU' },
      { lang: 'en-US' },
      { lang: 'en-IN' },
      { lang: 'es-ES' },
      { lang: 'pt-BR' },
      { lang: 'ru-RU' },
      { lang: 'en-CA' },
    ];

    let noEnglishArray = [
      { lang: 'es-ES' },
      { lang: 'pt-BR' },
      { lang: 'ru-RU' },
    ];

    //Assert
    let result = prepareVoicesArray(allLanguagesArray);

    //Act
    expect(result).toEqual(expect.not.arrayContaining(noEnglishArray));
  });
});
