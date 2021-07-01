import { gql, useQuery } from '@apollo/client';
import { AllCountires } from '../common/interface/countriesInterface';

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

export const useGetCountries = (code: string) => {
    console.log(code);
    const { data } = useQuery<AllCountires>(GET_COUNTRIES, {
        variables: { code },
    });
    return data?.continent.countries;
};
