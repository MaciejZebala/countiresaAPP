export interface Country {
    name: string;
    emoji: string;
    languages: { name: string }[];
}

export interface CountryArray {
    countries: Country[];
}

export interface AllCountires {
    continent: {
        countries: Country[];
    };
}
