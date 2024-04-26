import { useCharacters } from "graphql/queries";
import { CharactersType } from "types/definition";
export const Characters = () => {
  const { loading, error, characters } = useCharacters();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div style={{ paddingTop: "6rem" }}>
      <h2>Rick & Morty Characters</h2>
      <div>
        {characters.map((character: CharactersType) => (
          <div key={character.id}>
            <a href={`/characters/${character.id}`}>{character.name}</a>
            <img src={character.image} alt={character.name} />
            <p>{character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
