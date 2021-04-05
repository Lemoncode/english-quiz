import { mapObject } from './map-object';

describe('map-object specs', () => {
    describe('Edge scenarios', () => {
        it('Should return null if original object is null', () => {
            //Arrange

            //Act
            const result = mapObject(null, null, null);

            //Assert
            expect(result).toBeNull();
        })

        it('Should return null if original object is undefined', () => {
            //Arrange

            //Act
            const result = mapObject(undefined, null, null);

            //Assert
            expect(result).toBeNull();
        })

        it('Should return an empty object if original object is empty', () => {
            //Arrange
            const originalObject = {}

            //Act
            const result = mapObject(originalObject, null, null);

            //Assert
            expect(result === originalObject).toBeFalsy();
            expect(Object.entries(result)).toHaveLength(0);
        })

        it('Should return a copy of original object, but not the original, if mapper function is null', () => {
            //Arrange
            const originalObject = { a: 'myValue' }

            //Act
            const result = mapObject(originalObject, null, null);

            //Assert
            expect(result === originalObject).toBeFalsy();
            expect(result.a === originalObject.a).toBeTruthy();
        })
    })

    describe('Regular scenarios', () => {
        it('Should return a copy of original object where each field has been mapped if targetProperties is null', () => {
            //Arrange
            const originalObject = { a: 'myValue' }
            const mapper = (value: String) => value.toUpperCase();

            //Act
            const result = mapObject(originalObject, mapper, null);

            //Assert
            expect(result === originalObject).toBeFalsy();
            expect(result.a === mapper(originalObject.a)).toBeTruthy();
        })

        it('Should return a copy of original object where each field is equal to original object if targetProperties is []', () => {
            //Arrange
            const originalObject = { a: 'myValue' }
            const mapper = (value: String) => value.toUpperCase();

            //Act
            const result = mapObject(originalObject, mapper, []);

            //Assert
            expect(result === originalObject).toBeFalsy();
            expect(result.a === originalObject.a).toBeTruthy();
        })

        it('Should return a copy of original object where each field present in targetProperties has been mapped', () => {
            //Arrange
            const originalObject = { a: 'myValue', b: 'myOtherValue' }
            const mapper = (value: String) => value.toUpperCase();

            //Act
            const result = mapObject(originalObject, mapper, ['a']);

            //Assert
            expect(result === originalObject).toBeFalsy();
            expect(result.a === mapper(originalObject.a)).toBeTruthy();
            expect(result.b === originalObject.b).toBeTruthy();
        })
    })
})