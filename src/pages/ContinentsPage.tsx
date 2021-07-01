import React from 'react';
import styled from 'styled-components';
import { ListContinents } from '../components/ListContinents/ListContinents';
import { useGetContinents } from '../hooks/useGetContinents';
const ContinentsWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Loader = styled.div`
    margin: 200px auto;
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #ffc32b;
    width: 150px;
    height: 150px;
    -webkit-animation: spin 2s linear infinite;
    /* Safari */
    animation: spin 2s linear infinite;

    /* Safari */
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;
export const Continents: React.FC = () => {
    const { loading, error, data } = useGetContinents();
    const continents = data?.continents;
    if (loading) return <Loader></Loader>;
    if (error) return <p>Error</p>;
    return (
        <ContinentsWrapper>{<ListContinents continents={continents || []} />}</ContinentsWrapper>
    );
};
