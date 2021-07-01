import React from 'react';
import { ListContinents } from '../components/ListContinents/ListContinents';
import { useGetContinents } from '../hooks/useGetContinents';

export const Continents: React.FC = () => {
    const { loading, error, data } = useGetContinents();
    const continents = data?.continents;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return <div>{<ListContinents continents={continents || []} />}</div>;
};
