import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 5vh;
    background-color: #ffc32b;
`;
const NavigationLink = styled(NavLink)`
    margin-left: 15%;
    font-size: 2.1rem;
    color: black;
`;

export const Navigation = () => {
    return (
        <NavWrapper>
            <NavigationLink to="/">Home</NavigationLink>
        </NavWrapper>
    );
};
