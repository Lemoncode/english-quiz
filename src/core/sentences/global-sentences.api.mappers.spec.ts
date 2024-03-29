import * as model from 'core/sentences';
import * as apiModel from './global-sentences.api';
import { mapSentenceCollectionFromModelToApi } from './global-sentences.api.mappers';

describe('core/global-sentences.api.vm', () => {
  it('should return empty array when it feed sentenceList equals undefined', () => {
    // Arrange
    const sentenceList: model.SentenceEntityGlobal[] = undefined;
    // Act
    const sentenceListResult: apiModel.SentenceEntityApi[] = mapSentenceCollectionFromModelToApi(
      sentenceList
    );
    // Assert
    expect(sentenceListResult).toEqual([]);
  });
  it('should return empty array when it feed sentenceList equals null', () => {
    // Arrange
    const sentenceList: model.SentenceEntityGlobal[] = null;
    // Act
    const sentenceListResult: apiModel.SentenceEntityApi[] = mapSentenceCollectionFromModelToApi(
      sentenceList
    );
    // Assert
    expect(sentenceListResult).toEqual([]);
  });
  it('should return empty array when it feed sentenceList equals []', () => {
    // Arrange
    const sentenceList: model.SentenceEntityGlobal[] = [];
    // Act
    const sentenceListResult: apiModel.SentenceEntityApi[] = mapSentenceCollectionFromModelToApi(
      sentenceList
    );
    // Assert
    expect(sentenceListResult).toEqual([]);
  });
  it('should return an array with one sentence when it feed sentenceList with one item', () => {
    // Arrange
    const sentenceList: model.SentenceEntityGlobal[] = [
      {
        verb: 'test-verb',
        sentence: 'test-sentence',
        rightAnswer: 'Present',
      },
    ];
    // Act
    const result: apiModel.SentenceEntityApi[] = mapSentenceCollectionFromModelToApi(
      sentenceList
    );
    // Assert
    expect(result).toEqual([
      {
        verb: 'test-verb',
        sentence: 'test-sentence',
        rightAnswer: 'Present',
      },
    ]);
  });
  it('should return an array with two sentences when it feed sentenceList with two items', () => {
    // Arrange
    const sentenceList: model.SentenceEntityGlobal[] = [
      {
        verb: 'test-verb',
        sentence: 'test-sentence',
        rightAnswer: 'Present',
      },
      {
        verb: 'test-verb',
        sentence: 'test-sentence',
        rightAnswer: 'Present',
      },
    ];
    // Act
    const result: apiModel.SentenceEntityApi[] = mapSentenceCollectionFromModelToApi(
      sentenceList
    );
    // Assert
    expect(result).toEqual([
      {
        verb: 'test-verb',
        sentence: 'test-sentence',
        rightAnswer: 'Present',
      },
      {
        verb: 'test-verb',
        sentence: 'test-sentence',
        rightAnswer: 'Present',
      },
    ]);
  });
});
