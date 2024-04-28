import { render, screen } from "@testing-library/react";
import { EpisodesList } from "./EpisodesList";
import { formatDate } from "lib/utils";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "styles/theme";

const episodes = [
  { id: "1", name: "Episode One", created: "2021-07-16T19:20:30+01:00" },
];

describe("EpisodesList", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <EpisodesList episodes={episodes} />
        </ThemeProvider>
      </Router>
    );
    expect(screen.getByText("Episodes List")).toBeInTheDocument();
  });

  it("renders the correct number of episodes", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <EpisodesList episodes={episodes} />
        </ThemeProvider>
      </Router>
    );
    const episodeElements = screen.getAllByText(/Episode/);
    expect(episodeElements.length).toBe(episodes.length + 1);
  });

  it("displays the correct episode name and formatted date", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <EpisodesList episodes={episodes} />
        </ThemeProvider>
      </Router>
    );
    episodes.forEach((episode) => {
      expect(screen.getByText(episode.name)).toBeInTheDocument();
      expect(screen.getByText(formatDate(episode.created))).toBeInTheDocument();
    });
  });
});
