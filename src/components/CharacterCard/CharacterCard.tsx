import { useNavigate } from "react-router-dom";
import { CharactersType } from "types/definition";
import { Image } from "components/Image/Image";
import {
  StyledCharacterCard,
  CharacterName,
  CharacterSpecies,
  StyledLink,
} from "./CharacterCard.styled";

export const CharacterCard: React.FC<{ character: CharactersType }> = ({
  character,
}) => {
  const navigate = useNavigate();

  return (
    <StyledCharacterCard
      onClick={() => navigate(`/characters/${character.id}`)}
    >
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
      />
      <div className="character-card-info">
        <CharacterName>{character.name}</CharacterName>
        <CharacterSpecies>{character.species}</CharacterSpecies>
        <StyledLink to={`/characters/${character.id}`}>
          More about {character.name}
        </StyledLink>
      </div>
    </StyledCharacterCard>
  );
};
