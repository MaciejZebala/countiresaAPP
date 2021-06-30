import { gql, useQuery } from '@apollo/client';
import { AllContinents, Continent } from '../common/interface/continentsInterface';

const GET_CONTINENTS = gql`
    query {
        continents {
            name
            code
        }
    }
`;

export const useGetContinents = () => {
    const { data } = useQuery<AllContinents>(GET_CONTINENTS);
    return data?.continents;
};
