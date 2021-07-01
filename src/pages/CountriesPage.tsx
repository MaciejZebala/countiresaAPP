import React from 'react';
import { useParams } from 'react-router';
import { ListCountries } from '../components/ListCountries/ListCountries';
import { useGetCountries } from '../hooks/useGetCountries';

export const Countries: React.FC = () => {
    const { code } = useParams<{ code: string }>();
    const { loading, error, data } = useGetCountries({ variables: { code } });
    const countries = data?.continent.countries;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return <div>{<ListCountries countries={countries || []} />}</div>;
};
