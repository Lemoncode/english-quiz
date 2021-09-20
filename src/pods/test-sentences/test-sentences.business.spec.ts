import * as business from './test-sentences.business';
import * as sentenceApiModel from 'core/sentences';

describe('test-sentences.business', () => {
  describe('splitSentence', () => {
    it('should return empty array sentence when sentence is null and the method has been called', () => {
      // Arrange
      const sentence: string = null;
      const splitSentence = jest.spyOn(business, 'splitSentence');
      // Act
      const result = business.splitSentence(sentence);
      // Assert
      expect(splitSentence).toHaveBeenCalled();
      expect(result).toEqual([]);
    });
    it('should return empty array sentence when sentence is undefined', () => {
      // Arrange
      const sentence: string = undefined;
      const splitSentence = jest.spyOn(business, 'splitSentence');
      // Act
      const result = business.splitSentence(sentence);
      // Assert
      expect(result).toEqual([]);
    });
    it('should return empty array sentence when sentence is an empty string', () => {
      // Arrange
      const sentence: string = '';
      const splitSentence = jest.spyOn(business, 'splitSentence');
      // Act
      const result = business.splitSentence(sentence);
      // Assert
      expect(result).toEqual([]);
    });
    it('should return an array where its first element is an empty string and its second element its a splitSentence after {verb}', () => {
      // Arrange
      const sentence: string = `{verb} test-sufixSentence`;
      const splitSentence = jest.spyOn(business, 'splitSentence');
      // Act
      const result = business.splitSentence(sentence);
      // Assert
      expect(splitSentence).toHaveBeenCalledWith(`{verb} test-sufixSentence`);
      expect(result).toEqual(['', ' test-sufixSentence']);
    });
    it('should return an array where its first element is a splitSentnce before {verb} and its second element its an empty string', () => {
      // Arrange
      const sentence: string = `test-prefixSentence {verb}`;
      const splitSentence = jest.spyOn(business, 'splitSentence');
      // Act
      const result = business.splitSentence(sentence);
      // Assert
      expect(splitSentence).toHaveBeenCalledWith(`test-prefixSentence {verb}`);
      expect(result).toEqual(['test-prefixSentence ', '']);
    });
    it('should return an array where its first element is a splitSentence before {verb} and its second element its an splitSentence after {verb}', () => {
      // Arrange
      const sentence: string = `test-prefixSentence {verb} text-sufixSentence`;
      const splitSentence = jest.spyOn(business, 'splitSentence');
      // Act
      const result = business.splitSentence(sentence);
      // Assert
      expect(splitSentence).toHaveBeenCalledWith(
        `test-prefixSentence {verb} text-sufixSentence`
      );
      expect(result).toEqual(['test-prefixSentence ', ' text-sufixSentence']);
    });
  });
  describe('pickRandomSentence', () => {
    it('should return empty sentence when sentenceCollectionList is null and the function is called', () => {
      // Arrange
      const sentenceList: sentenceApiModel.SentenceEntityApi[] = null;
      const pickRandomSentence = jest.spyOn(business, 'pickRandomSentence');
      // Act
      const result = business.pickRandomSentence(sentenceList);
      // Assert
      expect(pickRandomSentence).toHaveBeenCalled();
      expect(result).toEqual({
        verb: '',
        sentence: '',
        rightAnswer: 'Present',
      });
    });
    it('should return empty sentence when sentenceCollectionList is undefined', () => {
      // Arrange
      const sentenceList: sentenceApiModel.SentenceEntityApi[] = undefined;
      const pickRandomSentence = jest.spyOn(business, 'pickRandomSentence');
      // Act
      const result = business.pickRandomSentence(sentenceList);
      // Assert
      expect(result).toEqual({
        verb: '',
        sentence: '',
        rightAnswer: 'Present',
      });
    });
    it('should return a sentence when sentenceCollectionList is a sentence Array ', () => {
      // Arrange
      const sentenceList: sentenceApiModel.SentenceEntityApi[] = [
        {
          verb: 'test-verb',
          sentence: 'test-sentence',
          rightAnswer: 'Present',
        },
      ];
      const pickRandomSentence = jest.spyOn(business, 'pickRandomSentence');
      // Act
      const result = business.pickRandomSentence(sentenceList);
      // Assert
      expect(pickRandomSentence).toHaveBeenCalledWith([
        {
          verb: 'test-verb',
          sentence: 'test-sentence',
          rightAnswer: 'Present',
        },
      ]);
      expect(result).toEqual({
        verb: 'test-verb',
        sentence: 'test-sentence',
        rightAnswer: 'Present',
      });
    });
  });
});
