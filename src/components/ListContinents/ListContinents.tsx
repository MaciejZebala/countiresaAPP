import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AllContinents, Continent } from '../../common/interface/continentsInterface';
import { AllCountires, Country, CountryArray } from '../../common/interface/countriesInterface';

const ListWrapper = styled.ul``;
const ListItem = styled(Link)``;
const ItemName = styled.p``;
const ItemCode = styled.p``;

export const ListContinents: React.FC<AllContinents> = ({ continents }) => {
    return (
        <ListWrapper>
            {continents.map((item) => (
                <ListItem to="">
                    <ItemName>{item.name}</ItemName>
                    <ItemCode>{item.code}</ItemCode>
                </ListItem>
            ))}
        </ListWrapper>
    );
};
