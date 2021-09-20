import * as sentenceApi from 'core/sentences';
import * as sentenceVm from './test.sentences.vm';
import * as verbApi from 'core/verbs/global-verbs.api';
import { mapFromSentenceApiToSentenceVm } from './test-sentences.mappers';

describe('test-sentences.mapper.spec', () => {
  it('should return empty sentence when sentence and verb are null', () => {
    // Arrange
    const sentenceApi: sentenceApi.SentenceEntityApi = null;
    const verbApi: verbApi.VerbEntityApi = null;
    // Act
    const result = mapFromSentenceApiToSentenceVm(sentenceApi, verbApi);
    // Assert
    expect(result).toEqual(sentenceVm.emptySentence());
  });
  it('should return empty sentence when sentence and verb are undefined', () => {
    // Arrange
    const sentenceApi: sentenceApi.SentenceEntityApi = undefined;
    const verbApi: verbApi.VerbEntityApi = undefined;
    // Act
    const result = mapFromSentenceApiToSentenceVm(sentenceApi, verbApi);
    // Assert
    expect(result).toEqual(sentenceVm.emptySentence());
  });
  it('should return one mapped sentence when it feeds with one sentence and one verb at the beggining of the sentence', () => {
    // Arrange
    const sentenceApi: sentenceApi.SentenceEntityApi = {
      verb: 'test-verb',
      sentence: `{verb} test-sufixSentence`,
      rigthAnswer: 'Present',
    };
    const verbApi: verbApi.VerbEntityApi = {
      infinitive: 'test-verb-infinitive',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    };
    // Act
    const result = mapFromSentenceApiToSentenceVm(sentenceApi, verbApi);
    // Assert
    expect(result).toEqual({
      prefixSentence: '',
      sufixSentence: ' test-sufixSentence',
      rightAnswer: 'Present',
      present: 'test-verb-infinitive',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    });
  });
  it('should return one mapped sentence when it feeds with one sentence and one verb at the end of the sentence', () => {
    // Arrange
    const sentenceApi: sentenceApi.SentenceEntityApi = {
      verb: 'test-verb',
      sentence: `test-prefixSentence {verb}`,
      rigthAnswer: 'Present',
    };
    const verbApi: verbApi.VerbEntityApi = {
      infinitive: 'test-verb-infinitive',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    };
    // Act
    const result = mapFromSentenceApiToSentenceVm(sentenceApi, verbApi);
    // Assert
    expect(result).toEqual({
      prefixSentence: 'test-prefixSentence ',
      sufixSentence: '',
      rightAnswer: 'Present',
      present: 'test-verb-infinitive',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    });
  });
  it('should return one mapped sentence when it feeds with one sentence and one verb at the middle of the sentence', () => {
    // Arrange
    const sentenceApi: sentenceApi.SentenceEntityApi = {
      verb: 'test-verb',
      sentence: 'test-prefixSentence {verb} test-sufixSentence',
      rigthAnswer: 'Present',
    };
    const verbApi: verbApi.VerbEntityApi = {
      infinitive: 'test-verb-infinitive',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    };
    // Act
    const result = mapFromSentenceApiToSentenceVm(sentenceApi, verbApi);
    // Assert
    expect(result).toEqual({
      prefixSentence: 'test-prefixSentence ',
      sufixSentence: ' test-sufixSentence',
      rightAnswer: 'Present',
      present: 'test-verb-infinitive',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    });
  });
});
