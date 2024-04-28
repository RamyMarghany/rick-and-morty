import { Image } from "components/Image/Image";
import { CharacterDetailsType } from "types/definition";
import { StyledMainDetails } from "./CharacterDetailsCard.styled";
export const CharacterDetailsCard: React.FC<{
  characterDetails: CharacterDetailsType;
}> = ({ characterDetails }) => {
  return (
    <StyledMainDetails>
      <Image
        src={characterDetails.image}
        alt={characterDetails.name}
        width={300}
        height={300}
      />
      <div>
        <h3>{characterDetails.name}</h3>
        <p>
          Species<b>{characterDetails.species}</b>
        </p>
        <p>
          Gender<b>{characterDetails.gender}</b>
        </p>
        <p>
          Status<b>{characterDetails.status}</b>
        </p>
        <p>
          Location<b>{characterDetails.location.name}</b>
        </p>
        <p>
          Dimension<b>{characterDetails.location.dimension}</b>
        </p>
      </div>
    </StyledMainDetails>
  );
};
