import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { ListCountries } from '../components/ListCountries/ListCountries';
import { useGetCountries } from '../hooks/useGetCountries';

const CountriesWrapper = styled.div``;

export const Countries: React.FC = () => {
    const { code } = useParams<{ code: string }>();
    const { loading, error, data } = useGetCountries({ variables: { code } });
    const countries = data?.continent.countries;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return <CountriesWrapper>{<ListCountries countries={countries || []} />}</CountriesWrapper>;
};
