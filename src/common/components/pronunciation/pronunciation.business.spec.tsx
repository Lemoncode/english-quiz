import * as React from 'react';
import { getAmericanVoices, getBritishVoices } from './pronunciation.business';

describe('Pronunciation business specs', () => {
  it('Should return an empty array if there´s no American voices', () => {
    //Arrange
    let noAmericanArray = [
      { lang: 'es-ES' },
      { lang: 'pt-BR' },
      { lang: 'ru-RU' },
      { lang: 'en-GB' },
    ];
    //Assert
    let result = getAmericanVoices(noAmericanArray);

    //Act
    expect(result.length).toBe(0);
  });

  it('Should return an empty array if there´s no British voices', () => {
    //Arrange
    let noBritshArray = [
      { lang: 'es-ES' },
      { lang: 'pt-BR' },
      { lang: 'ru-RU' },
      { lang: 'en-US' },
    ];
    //Assert
    let result = getBritishVoices(noBritshArray);

    //Act
    expect(result.length).toBe(0);
  });

  it('Should return an array composed by two elements when there are two American voices', () => {
    //Arrange
    let aux = [
      { lang: 'en-AU' },
      { lang: 'en-US' },
      { lang: 'en-GB' },
      { lang: 'en-US' },
    ];
    //Assert
    let result = getAmericanVoices(aux);

    //Act
    expect(result.length).toBe(2);
  });

  it('Should return an array composed by one element when there is one British voice', () => {
    //Arrange
    let aux = [
      { lang: 'en-AU' },
      { lang: 'en-US' },
      { lang: 'en-GB' },
      { lang: 'en-CA' },
    ];
    //Assert
    let result = getBritishVoices(aux);

    //Act
    expect(result.length).toBe(1);
  });
});