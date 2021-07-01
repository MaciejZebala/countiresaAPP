import React from 'react';
import { CountryArray } from '../../common/interface/countriesInterface';
import styled from 'styled-components';

const ListCountriesWrapper = styled.ul``;
const ListCountriesItem = styled.li``;
const ItemCountriesName = styled.p``;
const ItemCountriesCode = styled.p``;

export const ListCountries: React.FC<CountryArray> = ({ countries }) => {
    console.log(countries);

    return (
        <ListCountriesWrapper>
            {countries.map((item) => (
                <ListCountriesItem key={item.emoji}>
                    <ItemCountriesName>{item.name}</ItemCountriesName>
                    <ItemCountriesCode>{item.emoji}</ItemCountriesCode>
                    <ItemCountriesCode>
                        {item.languages.length > 0 ? item.languages[0].name : 'Brak danych'}
                    </ItemCountriesCode>
                </ListCountriesItem>
            ))}
        </ListCountriesWrapper>
    );
};
