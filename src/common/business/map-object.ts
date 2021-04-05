export const mapObject = <T>(originalObject: T, mapper: (value: any) => any, targetProperties: String[] = null): T => {
    const mappedObject = Object.entries(originalObject).reduce((acc, cur) => {
        const [key, value] = cur;

        if (targetProperties === null || targetProperties.some(prop => key === prop)) {
            acc[key] = mapper(value);
        } else {
            acc[key] = value;
        }

        return acc;
    }, {})

    return <T>mappedObject;
}