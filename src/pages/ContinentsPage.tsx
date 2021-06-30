import React from 'react';
import { List } from '../components/List/List';
import { useGetContinents } from '../hooks/useGetContinents';

export const Continents: React.FC = () => {
    const data = useGetContinents();

    return <div>{<List continents={data || []} />}</div>;
};
