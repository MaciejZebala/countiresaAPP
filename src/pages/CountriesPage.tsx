import React from 'react';
import { ListCountries } from '../components/ListCountries/ListCountries';
import { useGetCountries } from '../hooks/useGetCountries';

export const Countries: React.FC = () => {
    const data = useGetCountries();
    console.log(data);
    return <div>{<ListCountries countries={data || []} />}</div>;
};
