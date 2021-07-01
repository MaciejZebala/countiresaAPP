import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.div``;
const NavigationLink = styled(NavLink)``;

export const Navigation = () => {
    return (
        <NavWrapper>
            <NavigationLink to="/">Home</NavigationLink>
        </NavWrapper>
    );
};
