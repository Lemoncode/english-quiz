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

export interface VerbCorrect {
    infinitive: boolean;
    past: boolean;
    participle: boolean;
    all: boolean;
}

export const createDefaultVerbCorrect = (): VerbCorrect => ({
    infinitive: false,
    past: false,
    participle: false,
    all: false,
});
