import { useCharacters } from "graphql/queries";
import { CharactersType } from "types/definition";
import { CharacterCard } from "components/CharacterCard/CharacterCard";
import { Spinner } from "components/Spinner/Spinner";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";
import { CharactersList } from "./Characters.styled";
export const Characters = () => {
  const { loading, error, characters } = useCharacters();

  if (loading) return <Spinner size={100} />;
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <div>
      <h2>Rick & Morty Characters</h2>
      <CharactersList>
        {characters.map((character: CharactersType) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </CharactersList>
    </div>
  );
};
