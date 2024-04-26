import { useParams } from "react-router-dom";
import { useCharacter } from "../../graphql/queries";
import { EpisodesType } from "../../types/definition";
export const Character = () => {
  const { id = "" } = useParams();
  const { loading, error, data } = useCharacter(id);

  const character = data?.character || {};
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <h2>Rick & Morty Characters</h2>
      <div>
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.status}</p>
          <p>{character.location.name}</p>
          <p>{character.location.dimension}</p>
          <p>{character.location.type}</p>
          <ul>
            {character.episode.map((episode: EpisodesType) => (
              <li key={episode.id}>
                {episode.name}
                <p>{episode.created}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
