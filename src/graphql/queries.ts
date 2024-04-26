import { useQuery, gql } from '@apollo/client';

// Get Characters Query
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


// Get Character Query
const GET_CHARACTER = gql`
    query GetCharacterById($id: ID!) {
        character(id: $id) {
        id
        name
        status
        species
        gender
        image
        location {
            dimension
            name
            type
            }
        episode {
            name
            created
            id
            }
        }
    }
`;

export const useCharacter = (id: string) => {
    const { error, loading, data } = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    })
    return { error, loading, data }
}