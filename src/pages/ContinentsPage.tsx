import React from 'react';
import { AllCountires } from '../common/interface/countriesInterface';
import { ListContinents } from '../components/ListContinents/ListContinents';
import { useGetContinents } from '../hooks/useGetContinents';

export const Continents: React.FC = () => {
    const data = useGetContinents();
    console.log(data);
    return <div>{<ListContinents continents={data || []} />}</div>;
};
