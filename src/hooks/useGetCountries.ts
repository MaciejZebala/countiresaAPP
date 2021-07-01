import { gql, useQuery } from '@apollo/client';
import { AllCountires } from '../common/interface/countriesInterface';

const GET_COUNTRIES = gql`
    query {
        continent(code: "EU") {
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

export const useGetCountries = () => {
    const { data } = useQuery<AllCountires>(GET_COUNTRIES);
    return data?.continent.countries;
};
