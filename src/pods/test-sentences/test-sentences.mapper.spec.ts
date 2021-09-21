import * as sentenceApi from 'core/sentences';
import * as sentenceVm from './test.sentences.vm';
import * as verbApi from 'core/verbs/global-verbs.api';
import { mapFromSentenceApiToSentenceVm } from './test-sentences.mappers';

describe('test-sentences.mapper.spec', () => {
  it('should return empty sentence when sentence and verb are null', () => {
    // Arrange
    const sentenceEntityApi: sentenceApi.SentenceEntityApi = null;
    const verbCollection: verbApi.VerbEntityApi[] = null;
    // Act
    const result = mapFromSentenceApiToSentenceVm(
      sentenceEntityApi,
      verbCollection
    );
    // Assert
    expect(result).toEqual(sentenceVm.emptySentence());
  });
  it('should return empty sentence when sentence and verb are undefined', () => {
    // Arrange
    const sentenceEntityApi: sentenceApi.SentenceEntityApi = undefined;
    const verbCollection: verbApi.VerbEntityApi[] = undefined;
    // Act
    const result = mapFromSentenceApiToSentenceVm(
      sentenceEntityApi,
      verbCollection
    );
    // Assert
    expect(result).toEqual(sentenceVm.emptySentence());
  });
  it('should return one mapped sentence when it feeds with one sentence and one verb at the beggining of the sentence', () => {
    // Arrange
    const sentenceEntityApi: sentenceApi.SentenceEntityApi = {
      verb: 'test-verb',
      sentence: `{verb} test-sufixSentence`,
      rightAnswer: 'Present',
    };
    const verbCollection: verbApi.VerbEntityApi[] = [
      {
        infinitive: 'test-verb',
        past: 'test-verb-past',
        participle: 'test-verb-participle',
        translation: 'test-verb-translation',
      },
    ];
    // Act
    const result = mapFromSentenceApiToSentenceVm(
      sentenceEntityApi,
      verbCollection
    );
    // Assert
    expect(result).toEqual({
      prefixSentence: '',
      sufixSentence: ' test-sufixSentence',
      rightAnswer: 'Present',
      present: 'test-verb',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    });
  });
  it('should return one mapped sentence when it feeds with one sentence and one verb at the end of the sentence', () => {
    // Arrange
    const sentenceEntityApi: sentenceApi.SentenceEntityApi = {
      verb: 'test-verb',
      sentence: `test-prefixSentence {verb}`,
      rightAnswer: 'Present',
    };
    const verbCollection: verbApi.VerbEntityApi[] = [
      {
        infinitive: 'test-verb',
        past: 'test-verb-past',
        participle: 'test-verb-participle',
        translation: 'test-verb-translation',
      },
    ];
    // Act
    const result = mapFromSentenceApiToSentenceVm(
      sentenceEntityApi,
      verbCollection
    );
    // Assert
    expect(result).toEqual({
      prefixSentence: 'test-prefixSentence ',
      sufixSentence: '',
      rightAnswer: 'Present',
      present: 'test-verb',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    });
  });
  it('should return one mapped sentence when it feeds with one sentence and one verb at the middle of the sentence', () => {
    // Arrange
    const sentenceEntityApi: sentenceApi.SentenceEntityApi = {
      verb: 'test-verb',
      sentence: 'test-prefixSentence {verb} test-sufixSentence',
      rightAnswer: 'Present',
    };
    const verbCollection: verbApi.VerbEntityApi[] = [
      {
        infinitive: 'test-verb',
        past: 'test-verb-past',
        participle: 'test-verb-participle',
        translation: 'test-verb-translation',
      },
    ];
    // Act
    const result = mapFromSentenceApiToSentenceVm(
      sentenceEntityApi,
      verbCollection
    );
    // Assert
    expect(result).toEqual({
      prefixSentence: 'test-prefixSentence ',
      sufixSentence: ' test-sufixSentence',
      rightAnswer: 'Present',
      present: 'test-verb',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    });
  });
  it('should return one mapped sentence when it feeds with one sentence and two verbs', () => {
    // Arrange
    const sentenceEntityApi: sentenceApi.SentenceEntityApi = {
      verb: 'test-verb',
      sentence: 'test-prefixSentence {verb} test-sufixSentence',
      rightAnswer: 'Present',
    };
    const verbCollection: verbApi.VerbEntityApi[] = [
      {
        infinitive: 'test-verb',
        past: 'test-verb-past',
        participle: 'test-verb-participle',
        translation: 'test-verb-translation',
      },
      {
        infinitive: 'test-verb2',
        past: 'test-verb-past',
        participle: 'test-verb-participle',
        translation: 'test-verb-translation',
      },
    ];
    // Act
    const result = mapFromSentenceApiToSentenceVm(
      sentenceEntityApi,
      verbCollection
    );
    // Assert
    expect(result).toEqual({
      prefixSentence: 'test-prefixSentence ',
      sufixSentence: ' test-sufixSentence',
      rightAnswer: 'Present',
      present: 'test-verb',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    });
  });
});
