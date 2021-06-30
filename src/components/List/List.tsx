import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListWrapper = styled.ul``;
const ListItem = styled(Link)``;
const ItemName = styled.p``;
const ItemCode = styled.p``;

export const List = () => {
    return (
        <ListWrapper>
            <ListItem>
                <ItemName>siema</ItemName>
                <ItemCode></ItemCode>
            </ListItem>
        </ListWrapper>
    );
};
