import * as sentenceApi from 'core/sentences';
import * as sentenceVm from './test-sentences.vm';
import * as verbApi from 'core/verbs/global-verbs.api';
import * as mappers from './test-sentences.mappers';
import { SentenceEntityApi } from 'core/sentences';
import { VerbEntityGlobal } from 'core/verbs';

describe('test-sentences.mapper.spec', () => {
  it('should return empty sentence when sentence and verb are null', () => {
    // Arrange
    const sentenceEntityApi: sentenceApi.SentenceEntityApi = null;
    const verbCollection: verbApi.VerbEntityApi = null;
    // Act
    const result = mappers.mapFromSentenceApiToSentenceVm(
      sentenceEntityApi,
      verbCollection
    );
    // Assert
    expect(result).toEqual(sentenceVm.emptySentence());
  });
  it('should return empty sentence when sentence and verb are undefined', () => {
    // Arrange
    const sentenceEntityApi: sentenceApi.SentenceEntityApi = undefined;
    const verbCollection: verbApi.VerbEntityApi = undefined;
    // Act
    const result = mappers.mapFromSentenceApiToSentenceVm(
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
    const verbCollection: verbApi.VerbEntityApi = {
      infinitive: 'test-verb',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    };
    // Act
    const result = mappers.mapFromSentenceApiToSentenceVm(
      sentenceEntityApi,
      verbCollection
    );
    // Assert
    expect(result).toEqual({
      prefixSentence: '',
      sufixSentence: ' test-sufixSentence',
      rightTenseAnswer: 'Present',
      rightTextAnswer: 'test-verb',
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
    const verbCollection: verbApi.VerbEntityApi = {
      infinitive: 'test-verb',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    };
    // Act
    const result = mappers.mapFromSentenceApiToSentenceVm(
      sentenceEntityApi,
      verbCollection
    );
    // Assert
    expect(result).toEqual({
      prefixSentence: 'test-prefixSentence ',
      sufixSentence: '',
      rightTenseAnswer: 'Present',
      rightTextAnswer: 'test-verb',
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
    const verbCollection: verbApi.VerbEntityApi = {
      infinitive: 'test-verb',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    };
    // Act
    const result = mappers.mapFromSentenceApiToSentenceVm(
      sentenceEntityApi,
      verbCollection
    );
    // Assert
    expect(result).toEqual({
      prefixSentence: 'test-prefixSentence ',
      sufixSentence: ' test-sufixSentence',
      rightTenseAnswer: 'Present',
      rightTextAnswer: 'test-verb',
      present: 'test-verb',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    });
  });
  it('should return one mapped sentence when it feeds with one sentence with third person and one verb', () => {
    // Arrange
    const sentenceEntityApi: sentenceApi.SentenceEntityApi = {
      verb: 'test-verb',
      sentence: 'test-prefixSentence {verb} test-sufixSentence',
      rightAnswer: 'Present',
      specialForm: 'Test-third-person',
    };
    const verbCollection: verbApi.VerbEntityApi = {
      infinitive: 'test-verb',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    };
    // Act
    const result = mappers.mapFromSentenceApiToSentenceVm(
      sentenceEntityApi,
      verbCollection
    );
    // Assert
    expect(result).toEqual({
      prefixSentence: 'test-prefixSentence ',
      sufixSentence: ' test-sufixSentence',
      rightTenseAnswer: 'Present',
      rightTextAnswer: 'Test-third-person',
      present: 'test-verb',
      past: 'test-verb-past',
      participle: 'test-verb-participle',
      translation: 'test-verb-translation',
    });
  });
  describe('mapRandomSentence', () => {
    it('should return emptySentence when selectedCollection, selectedVerbs and verbCollection are null and the function is called', () => {
      // Arrange
      const selectedCollection: SentenceEntityApi[] = null;
      const selectedVerbs: string[] = null;
      const verbCollection: VerbEntityGlobal[] = null;
      const mapRandomSentence = jest.spyOn(mappers, 'mapRandomSentence');
      // Act
      const result = mappers.mapRandomSentence(
        selectedCollection,
        selectedVerbs,
        verbCollection
      );
      // Assert
      expect(mapRandomSentence).toHaveBeenCalled();
      expect(result).toEqual({
        prefixSentence: '',
        sufixSentence: '',
        rightTenseAnswer: 'Present',
        rightTextAnswer: '',
        present: '',
        past: '',
        participle: '',
        translation: '',
      });
    });
    it('should return emptySentence when selectedCollection, selectedVerbs and verbCollection are undefined', () => {
      // Arrange
      const selectedCollection: SentenceEntityApi[] = undefined;
      const selectedVerbs: string[] = undefined;
      const verbCollection: VerbEntityGlobal[] = undefined;
      // Act
      const result = mappers.mapRandomSentence(
        selectedCollection,
        selectedVerbs,
        verbCollection
      );
      // Assert
      expect(result).toEqual({
        prefixSentence: '',
        sufixSentence: '',
        rightTenseAnswer: 'Present',
        rightTextAnswer: '',
        present: '',
        past: '',
        participle: '',
        translation: '',
      });
    });
    it('should return mapSentence when selectedCollection, selectedVerbs and verbCollection are one item', () => {
      // Arrange
      const selectedCollection: SentenceEntityApi[] = [
        {
          rightAnswer: 'Present',
          sentence: 'test-prefixSentence {verb} test-sufixSentence',
          verb: 'test-verb',
        },
      ];
      const selectedVerbs: string[] = ['test-verb'];
      const verbCollection: VerbEntityGlobal[] = [
        {
          infinitive: 'test-verb',
          past: 'test-verb-past',
          participle: 'test-verb-participle',
          translation: 'test-verb-translation',
        },
      ];
      // Act
      const result = mappers.mapRandomSentence(
        selectedCollection,
        selectedVerbs,
        verbCollection
      );
      // Assert
      expect(result).toEqual({
        prefixSentence: 'test-prefixSentence ',
        sufixSentence: ' test-sufixSentence',
        rightTenseAnswer: 'Present',
        rightTextAnswer: 'test-verb',
        present: 'test-verb',
        past: 'test-verb-past',
        participle: 'test-verb-participle',
        translation: 'test-verb-translation',
      });
    });
    it('should return mapSentence when selectedCollection, selectedVerbs and verbCollection are two items', () => {
      // Arrange
      const selectedCollection: SentenceEntityApi[] = [
        {
          rightAnswer: 'Present',
          sentence: 'test-prefixSentence {verb} test-sufixSentence',
          verb: 'test-verb',
        },
        {
          rightAnswer: 'Present',
          sentence: 'test-prefixSentence {verb} test-sufixSentence',
          verb: 'test-verb',
        },
      ];
      const selectedVerbs: string[] = ['test-verb', 'test-verb'];
      const verbCollection: VerbEntityGlobal[] = [
        {
          infinitive: 'test-verb',
          past: 'test-verb-past',
          participle: 'test-verb-participle',
          translation: 'test-verb-translation',
        },
        {
          infinitive: 'test-verb',
          past: 'test-verb-past',
          participle: 'test-verb-participle',
          translation: 'test-verb-translation',
        },
      ];
      // Act
      const result = mappers.mapRandomSentence(
        selectedCollection,
        selectedVerbs,
        verbCollection
      );
      // Assert
      expect(result).toEqual({
        prefixSentence: 'test-prefixSentence ',
        sufixSentence: ' test-sufixSentence',
        rightTenseAnswer: 'Present',
        rightTextAnswer: 'test-verb',
        present: 'test-verb',
        past: 'test-verb-past',
        participle: 'test-verb-participle',
        translation: 'test-verb-translation',
      });
    });
  });
  describe('sentencesWithVerb', () => {
    it('should return randomVerb and sentencesWithVerbSelected when selectedCollection, selectedVerbs and verbCollection are null and the function is called', () => {
      // Arrange
      const selectedCollection: SentenceEntityApi[] = null;
      const selectedVerbs: string[] = null;
      const verbCollection: VerbEntityGlobal[] = null;
      const sentencesWithVerb = jest.spyOn(mappers, 'sentencesWithVerb');

      // Act
      const result = mappers.sentencesWithVerb(
        selectedCollection,
        selectedVerbs,
        verbCollection
      );
      // Assert
      let randomVerb: VerbEntityGlobal = {
        infinitive: '',
        past: '',
        participle: '',
        translation: '',
      };
      let sentencesWithVerbSelected: SentenceEntityApi[] = [];

      expect(sentencesWithVerb).toHaveBeenCalled();
      expect(result).toEqual({
        randomVerb,
        sentencesWithVerbSelected,
      });
    });
    it('should return randomVerb and sentencesWithVerbSelected when selectedCollection, selectedVerbs and verbCollection are undefined', () => {
      // Arrange
      const selectedCollection: SentenceEntityApi[] = undefined;
      const selectedVerbs: string[] = undefined;
      const verbCollection: VerbEntityGlobal[] = undefined;
      const sentencesWithVerb = jest.spyOn(mappers, 'sentencesWithVerb');
      // Act
      const result = mappers.sentencesWithVerb(
        selectedCollection,
        selectedVerbs,
        verbCollection
      );
      // Assert
      let randomVerb: VerbEntityGlobal = {
        infinitive: '',
        past: '',
        participle: '',
        translation: '',
      };
      let sentencesWithVerbSelected: SentenceEntityApi[] = [];

      expect(sentencesWithVerb).toHaveBeenCalled();
      expect(result).toEqual({
        randomVerb,
        sentencesWithVerbSelected,
      });
    });
    it('should return randomVerb and sentencesWithVerbSelected when selectedCollection, selectedVerbs and verbCollection are empty arrays', () => {
      // Arrange
      const selectedCollection: SentenceEntityApi[] = [];
      const selectedVerbs: string[] = [];
      const verbCollection: VerbEntityGlobal[] = [];
      // Act
      const result = mappers.sentencesWithVerb(
        selectedCollection,
        selectedVerbs,
        verbCollection
      );
      // Assert
      let randomVerb: VerbEntityGlobal = {
        infinitive: '',
        past: '',
        participle: '',
        translation: '',
      };
      let sentencesWithVerbSelected: SentenceEntityApi[] = [];

      expect(result).toEqual({
        randomVerb,
        sentencesWithVerbSelected,
      });
    });
    it('should return randomVerb and sentencesWithVerbSelected when selectedCollection, selectedVerbs and verbCollection are one item', () => {
      // Arrange
      const selectedCollection: SentenceEntityApi[] = [
        {
          verb: 'test-verb',
          sentence: 'test-sentence',
          rightAnswer: 'Present',
        },
      ];
      const selectedVerbs: string[] = ['test-verb'];
      const verbCollection: VerbEntityGlobal[] = [
        {
          infinitive: 'test-verb',
          past: 'test-verb-past',
          participle: 'test-verb-participle',
          translation: 'test-verb-translation',
        },
      ];
      // Act
      const result = mappers.sentencesWithVerb(
        selectedCollection,
        selectedVerbs,
        verbCollection
      );
      // Assert
      let randomVerb: VerbEntityGlobal = {
        infinitive: 'test-verb',
        past: 'test-verb-past',
        participle: 'test-verb-participle',
        translation: 'test-verb-translation',
      };
      let sentencesWithVerbSelected: SentenceEntityApi[] = [
        {
          verb: 'test-verb',
          sentence: 'test-sentence',
          rightAnswer: 'Present',
        },
      ];

      expect(result).toEqual({
        randomVerb,
        sentencesWithVerbSelected,
      });
    });
  });
});
