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
  it('should return empty array when none of the verbs are in the list', () => {
    // Arrange
    const verbListOne: string[] = ['test-1', 'test-2', 'test-3'];
    const verbListTwo: string[] = ['test-4', 'test-5', 'test-6'];

    // Act
    const result: string[] = sanitizeVerbSelectionList(
      verbListOne,
      verbListTwo
    );

    // Assert
    expect(result).toEqual([]);
  });
  it('should return one item when it feeds sanitizeVerbSelectionList with two items and some of the verbs in the list but not the first ones in the array', () => {
    // Arrange
    const verbListOne: string[] = ['test-1', 'test-2', 'test-3'];
    const verbListTwo: string[] = [
      'test-4',
      'test-5',
      'test-1',
      'test-6',
      'test-2',
    ];

    // Act
    const result: string[] = sanitizeVerbSelectionList(
      verbListOne,
      verbListTwo
    );

    // Assert
    expect(result).toEqual(['test-1', 'test-2']);
  });
  it('should return one item when it feeds sanitizeVerbSelectionList with two items and some of the verbs in the list but the last in the array', () => {
    // Arrange
    const verbListOne: string[] = ['test-1', 'test-2', 'test-3'];
    const verbListTwo: string[] = [
      'test-4',
      'test-5',
      'test-6',
      'test-2',
      'test-1',
    ];

    // Act
    const result: string[] = sanitizeVerbSelectionList(
      verbListOne,
      verbListTwo
    );

    // Assert
    expect(result).toEqual(['test-1', 'test-2']);
  });
  it('should return one item when it feeds sanitizeVerbSelectionList with two items and some of the verbs in the list but they are mixed in the array (Some of the are some of them not)', () => {
    // Arrange
    const verbListOne: string[] = ['test-1', 'test-2', 'test-3'];
    const verbListTwo: string[] = [
      'test-4',
      'test-2',
      'test-5',
      'test-1',
      'test-6',
    ];

    // Act
    const result: string[] = sanitizeVerbSelectionList(
      verbListOne,
      verbListTwo
    );

    // Assert
    expect(result).toEqual(['test-1', 'test-2']);
  });
});
