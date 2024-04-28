import { EpisodesType } from "types/definition";
import { formatDate } from "lib/utils";
import {
  StyledEpisodeWrapper,
  StyledEpisodeDetails,
} from "./EpisodesList.styled";
export const EpisodesList: React.FC<{ episodes: EpisodesType[] }> = ({
  episodes,
}) => {
  return (
    <StyledEpisodeWrapper>
      <h3>Episodes List</h3>
      <div>
        {episodes.map((episode) => (
          <StyledEpisodeDetails key={episode.id}>
            <p>{episode.name}</p>
            <p>{formatDate(episode.created)}</p>
          </StyledEpisodeDetails>
        ))}
      </div>
    </StyledEpisodeWrapper>
  );
};
