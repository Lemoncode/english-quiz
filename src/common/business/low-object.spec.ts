import { lowObject } from './low-object';

describe('low-object specs', () => {
    describe('Edge scenarios', () => {
        it('Should return null if original object is null', () => {
            //Arrange

            //Act
            const result = lowObject(null, null);

            //Assert
            expect(result).toBeNull();
        })

        it('Should return null if original object is undefined', () => {
            //Arrange

            //Act
            const result = lowObject(undefined, null);

            //Assert
            expect(result).toBeNull();
        })

        it('Should return an empty object if original object is empty', () => {
            //Arrange
            const originalObject = {}

            //Act
            const result = lowObject(originalObject, null);

            //Assert
            expect(result === originalObject).toBeFalsy();
            expect(Object.entries(result)).toHaveLength(0);
        })
    })

    describe('Regular scenarios', () => {
        it('Should return a copy of original object where each field has been low-cased if targetProperties is null', () => {
            //Arrange
            const originalObject = { a: 'myValue' }

            //Act
            const result = lowObject(originalObject, null);

            //Assert
            expect(result === originalObject).toBeFalsy();
            expect(result.a === originalObject.a.toLowerCase()).toBeTruthy();
        })

        it('Should return a copy of original object where each field is equal to original object if targetProperties is []', () => {
            //Arrange
            const originalObject = { a: 'myValue' }

            //Act
            const result = lowObject(originalObject, []);

            //Assert
            expect(result === originalObject).toBeFalsy();
            expect(result.a === originalObject.a).toBeTruthy();
        })

        it('Should return a copy of original object where each field present in targetProperties has been low-cased', () => {
            //Arrange
            const originalObject = { a: 'myValue', b: 'myOtherValue' }

            //Act
            const result = lowObject(originalObject, ['a']);

            //Assert
            expect(result === originalObject).toBeFalsy();
            expect(result.a === originalObject.a.toLowerCase()).toBeTruthy();
            expect(result.b === originalObject.b).toBeTruthy();
        })
    })
})