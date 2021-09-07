import { sanitizeVerbSelectionList } from './gobal-verbs-sanitizer';

describe('sanitizeVerbSelectionList', () => {
  it('should return empty array when it feeds sanitizeVerbSelectionList equals undefined', () => {
    // Arrange
    const verbListOne: string[] = undefined;
    const verbListTwo: string[] = undefined;

    // Act
    const result: string[] = sanitizeVerbSelectionList(
      verbListOne,
      verbListTwo
    );

    // Assert
    expect(result).toEqual([]);
  });
  it('should return empty array when it feeds sanitizeVerbSelectionList equals null', () => {
    // Arrange
    const verbListOne: string[] = null;
    const verbListTwo: string[] = null;

    // Act
    const result: string[] = sanitizeVerbSelectionList(
      verbListOne,
      verbListTwo
    );

    // Assert
    expect(result).toEqual([]);
  });
  it('should return empty array when it feeds sanitizeVerbSelectionList equals empty array', () => {
    // Arrange
    const verbListOne: string[] = [];
    const verbListTwo: string[] = [];

    // Act
    const result: string[] = sanitizeVerbSelectionList(
      verbListOne,
      verbListTwo
    );

    // Assert
    expect(result).toEqual([]);
  });
  it('should return one item when it feeds sanitizeVerbSelectionList with two items', () => {
    // Arrange
    const verbListOne: string[] = ['test-1', 'test-2', 'test-3', 'test-4'];
    const verbListTwo: string[] = ['test-1', 'test-2', 'test-3'];

    // Act
    const result: string[] = sanitizeVerbSelectionList(
      verbListOne,
      verbListTwo
    );

    // Assert
    expect(result).toEqual(['test-1', 'test-2', 'test-3']);
  });
});
