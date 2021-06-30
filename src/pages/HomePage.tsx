import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkToContinents = styled(Link)``;

export const HomePage = () => {
    return (
        <div>
            <LinkToContinents to="/continents">Lista Kontynentów</LinkToContinents>
        </div>
    );
};
