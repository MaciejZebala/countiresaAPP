import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AllContinents } from '../../common/interface/continentsInterface';

const ContinentsTitle = styled.h1`
    margin-bottom: 20px;
`;

const ListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    margin-top: 50px;
`;
const ListLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 0 70px;
    margin-bottom: 20px;
    background-color: #ffc32b;
    border-radius: 25px;
    text-decoration: none;
    color: black;
`;
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
const Name = styled.p``;
const Description = styled.p`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const ListContinents: React.FC<AllContinents> = ({ continents }) => {
    return (
        <ListWrapper>
            <ContinentsTitle>Continents List</ContinentsTitle>
            {continents.map((item) => (
                <ListLink to={`/continents/${item.code}`} key={item.code}>
                    <Item>
                        <Description>Name</Description>
                        <Name>{item.name}</Name>
                    </Item>
                    <Item>
                        <Description>Code</Description>
                        <Name>{item.code}</Name>
                    </Item>
                </ListLink>
            ))}
        </ListWrapper>
    );
};
