import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { CharacterCard } from "./CharacterCard";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "styles/theme";

const mockCharacter = {
  id: "1",
  name: "John Doe",
  image: "path/to/image",
  species: "Human",
};

describe("CharacterCard", () => {
  test("renders correctly", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <CharacterCard character={mockCharacter} />
        </ThemeProvider>
      </Router>
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "More about John Doe" })
    ).toBeInTheDocument();
  });

  test("passes correct props to Image component", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <CharacterCard character={mockCharacter} />
        </ThemeProvider>
      </Router>
    );

    const image = screen.getByRole("presentation");
    expect(image).toHaveAttribute("src", "path/to/image");
    expect(image).toHaveAttribute("alt", "John Doe");
  });

  test("link points to the correct path", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <CharacterCard character={mockCharacter} />
        </ThemeProvider>{" "}
      </Router>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/characters/1");
  });
});
