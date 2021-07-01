export interface Country {
    name: string;
    emoji: string;
    languages: { name?: string | 'brak danych' }[];
}

export interface CountryArray {
    countries: Country[];
}

export interface AllCountries {
    continent: {
        countries: Country[];
    };
}
