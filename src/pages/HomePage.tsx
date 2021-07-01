import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomePageWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const LinkToContinents = styled(Link)`
    font-size: 4rem;
    text-decoration: underline;
    text-decoration-color: #ffc32b;
    text-underline-offset: 10px;
    color: black;
`;

export const HomePage = () => {
    return (
        <HomePageWrapper>
            <LinkToContinents to="/continents">Lista Kontynentów</LinkToContinents>
        </HomePageWrapper>
    );
};
