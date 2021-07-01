import { gql, useQuery } from '@apollo/client';
import { AllCountries } from '../common/interface/countriesInterface';

const GET_COUNTRIES = gql`
    query GetRepo($code: ID!) {
        continent(code: $code) {
            countries {
                name
                emoji
                languages {
                    name
                }
            }
        }
    }
`;

export const useGetCountries = (options: {}) => {
    return useQuery<AllCountries>(GET_COUNTRIES, options);
};
