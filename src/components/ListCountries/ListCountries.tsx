import React from 'react';
import { CountryArray } from '../../common/interface/countriesInterface';
import styled from 'styled-components';

const CountriesTitle = styled.h1``;

const ListCountriesWrapper = styled.ul`
    display: grid;
    justify-items: center;
    row-gap: 20px;
    width: 50%;
    margin: 40px auto;
`;
const ListCountriesItem = styled.li`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
    width: 100%;
    background-color: #ffc32b;
    border-radius: 25px;
    padding: 5px 30px;
    @media screen and (max-width: 650px) {
        grid-template-columns: 1fr;
    }
`;
const Item = styled.div`
    display: grid;
    @media screen and (max-width: 650px) {
        margin-bottom: 10px;
    }
`;
const Name = styled.p``;
const Description = styled.p`
    font-weight: bold;
`;

export const ListCountries: React.FC<CountryArray> = ({ countries }) => {
    return (
        <ListCountriesWrapper>
            <CountriesTitle>Countries List</CountriesTitle>
            {countries.map((item) => (
                <ListCountriesItem key={item.emoji}>
                    <Item>
                        <Description>Name</Description>
                        <Name>{item.name}</Name>
                    </Item>
                    <Item>
                        <Description>Emoji</Description>
                        <Name>{item.emoji}</Name>
                    </Item>
                    <Item>
                        <Description>Language</Description>
                        <Name>
                            {item.languages.length > 0 ? item.languages[0].name : 'Brak danych'}
                        </Name>
                    </Item>
                </ListCountriesItem>
            ))}
        </ListCountriesWrapper>
    );
};
