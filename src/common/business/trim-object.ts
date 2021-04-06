import { mapObject } from './map-object';

export const trimObject = <T>(originalObject: T, targetProperties: String[] = null): T => {
    return <T>mapObject(originalObject, (value: String) => value?.trim(), targetProperties);
}