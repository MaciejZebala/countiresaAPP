export interface Continent {
    code: string;
    name: string;
    __typename: string;
}
export interface AllContinents {
    continents: Continent[];
}
