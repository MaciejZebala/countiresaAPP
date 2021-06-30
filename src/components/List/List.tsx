import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AllContinents, Continent } from '../../common/interface/continentsInterface';

const ListWrapper = styled.ul``;
const ListItem = styled(Link)``;
const ItemName = styled.p``;
const ItemCode = styled.p``;

export const List: React.FC<AllContinents> = ({ continents }: AllContinents) => {
    return (
        <ListWrapper>
            {continents.map((item) => (
                <ListItem>
                    <ItemName>{item.name}</ItemName>
                    <ItemCode>{item.code}</ItemCode>
                </ListItem>
            ))}
        </ListWrapper>
    );
};
