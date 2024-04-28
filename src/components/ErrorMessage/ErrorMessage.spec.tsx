import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./ErrorMessage";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "styles/theme";

describe("AppBar", () => {
  it("renders correctly", () => {
    const errorMessage = "Test error message";
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <ErrorMessage message={errorMessage} />
        </ThemeProvider>
      </Router>
    );

    expect(screen.getByText("There's an error")).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("contains the correct structure", () => {
    const errorMessage = "Structure test message";
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <ErrorMessage message={errorMessage} />
        </ThemeProvider>
      </Router>
    );
    const wrapper = screen.getByRole("alert");
    expect(wrapper).toContainElement(screen.getByRole("heading", { level: 2 }));
    expect(wrapper).toContainElement(screen.getByText(errorMessage));
  });
});
