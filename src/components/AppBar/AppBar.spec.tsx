import { render, screen } from "@testing-library/react";
import { AppBar } from "./AppBar";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "styles/theme";
describe("AppBar", () => {
  it("renders correctly", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <AppBar />
        </ThemeProvider>
      </Router>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
