export interface Verb {
    infinitive: string;
    past: string;
    participle: string;
    translation: string;
}

export const createDefaultVerb = (): Verb => ({
    infinitive: '',
    participle: '',
    past: '',
    translation: '',
});
