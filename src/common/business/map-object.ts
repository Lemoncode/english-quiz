export const mapObject = <T, S>(originalObject: T, mapper: (value: S) => S, targetProperties: String[] = null): T => {
    if (!originalObject) return null;

    const mappedObject = Object.entries(originalObject).reduce((acc, cur) => {
        const [key, value] = cur;

        if (!!mapper && (targetProperties === null || targetProperties.some(prop => key === prop))) {
            acc[key] = mapper(value);
        } else {
            acc[key] = value;
        }

        return acc;
    }, {})

    return <T>mappedObject;
}