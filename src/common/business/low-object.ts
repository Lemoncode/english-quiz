import { mapObject } from './map-object';

export const lowObject = <T>(originalObject: T, targetProperties: String[] = null): T => {
    return <T>mapObject(originalObject, (value: String) => value?.toLowerCase(), targetProperties);
}