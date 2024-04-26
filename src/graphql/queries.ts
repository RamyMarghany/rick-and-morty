import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters($name: String, $species: String) {
    characters(filter: { name: $name, species: $species }) {
      results {
        id
        name
        species
        image
      }
    }
  }
`;

export const useCharacters = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS);
    return { loading, error, characters: data?.characters?.results || [] };
};