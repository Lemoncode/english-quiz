import { sanitizeVerbSelectionList } from './gobal-verbs-sanitizer';

describe('sanitizeVerbSelectionList', () => {
  it('should return empty array when it feeds sanitizeVerbSelectionList equals undefined', () => {
    // Arrange
    const verbList: string[] = undefined;

    // Act
    const result: string[] = sanitizeVerbSelectionList(verbList);

    // Assert
    expect(result).toEqual([]);
  });
  it('should return empty array when it feeds sanitizeVerbSelectionList equals null', () => {
    // Arrange
    const verbList: string[] = null;

    // Act
    const result: string[] = sanitizeVerbSelectionList(verbList);

    // Assert
    expect(result).toEqual([]);
  });
  it('should return empty array when it feeds sanitizeVerbSelectionList equals empty array', () => {
    // Arrange
    const verbList: string[] = [];

    // Act
    const result: string[] = sanitizeVerbSelectionList(verbList);

    // Assert
    expect(result).toEqual([]);
  });
  it('should return one item when it feeds sanitizeVerbSelectionList with one item', () => {
    // Arrange
    const verbList: string[] = ['test-1', 'test-2', 'test-3'];

    // Act
    const result: string[] = sanitizeVerbSelectionList(verbList);

    // Assert
    expect(result).toEqual(['test-1', 'test-2', 'test-3']);
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
