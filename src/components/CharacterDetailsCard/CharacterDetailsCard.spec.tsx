import { render, screen } from "@testing-library/react";
import { CharacterDetailsCard } from "./CharacterDetailsCard";
import { CharacterDetailsType } from "types/definition";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "styles/theme";

describe("CharacterDetailsCard", () => {
  const mockDetails: CharacterDetailsType = {
    id: "1",
    name: "John Doe",
    image: "path/to/image",
    species: "Human",
    gender: "Male",
    status: "Alive",
    location: {
      name: "Earth",
      dimension: "Dimension C-137",
      type: "Planet",
    },
    episode: [],
  };

  it("renders without crashing", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <CharacterDetailsCard characterDetails={mockDetails} />
        </ThemeProvider>
      </Router>
    );
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("passes correct props to Image component", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <CharacterDetailsCard characterDetails={mockDetails} />
        </ThemeProvider>
      </Router>
    );
    const image = screen.getByRole("presentation");
    expect(image).toHaveAttribute("src", "path/to/image");
    expect(image).toHaveAttribute("alt", "John Doe");
  });

  it("displays the correct character details", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <CharacterDetailsCard characterDetails={mockDetails} />
        </ThemeProvider>
      </Router>
    );
    expect(screen.getByText("Human")).toBeInTheDocument();
    expect(screen.getByText("Male")).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();
    expect(screen.getByText("Earth")).toBeInTheDocument();
    expect(screen.getByText("Dimension C-137")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <CharacterDetailsCard characterDetails={mockDetails} />
        </ThemeProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
