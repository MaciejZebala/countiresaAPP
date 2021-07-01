import { gql, useQuery } from '@apollo/client';
import { AllContinents } from '../common/interface/continentsInterface';

const GET_CONTINENTS = gql`
    query {
        continents {
            name
            code
        }
    }
`;

export const useGetContinents = () => {
    return useQuery<AllContinents>(GET_CONTINENTS);
};
