import React from 'react';
import { useParams } from 'react-router';
import { ListCountries } from '../components/ListCountries/ListCountries';
import { useGetCountries } from '../hooks/useGetCountries';

export const Countries: React.FC = () => {
    const { code } = useParams<{ code: string }>();
    const data = useGetCountries(code);
    return <div>{<ListCountries countries={data || []} />}</div>;
};
