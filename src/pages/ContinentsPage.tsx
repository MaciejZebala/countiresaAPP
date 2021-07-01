import React from 'react';
import styled from 'styled-components';
import { ListContinents } from '../components/ListContinents/ListContinents';
import { useGetContinents } from '../hooks/useGetContinents';
const ContinentsWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
export const Continents: React.FC = () => {
    const { loading, error, data } = useGetContinents();
    const continents = data?.continents;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return (
        <ContinentsWrapper>{<ListContinents continents={continents || []} />}</ContinentsWrapper>
    );
};
