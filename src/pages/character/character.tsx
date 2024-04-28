import { useParams } from "react-router-dom";
import { useCharacter } from "graphql/queries";
import { CharacterDetailsCard } from "components/CharacterDetailsCard/CharacterDetailsCard";
import { EpisodesList } from "components/EpisodesList/EpisodesList";
import { Spinner } from "components/Spinner/Spinner";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";

export const Character = () => {
  const { id = "" } = useParams();
  const { loading, error, data } = useCharacter(id);

  const character = data?.character || {};
  if (loading) return <Spinner size={75} />;
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <>
      <CharacterDetailsCard characterDetails={character} />
      <EpisodesList episodes={character.episode} />
    </>
  );
};
