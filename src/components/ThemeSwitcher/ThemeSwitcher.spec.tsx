import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "styled-components";
import { LightTheme } from "styles/theme";
import { ThemeSwitcher } from "./ThemeSwitcher";

describe("ThemeSwitcher", () => {
  const mockToggleTheme = jest.fn();
  const themeContextValue = {
    theme: "light",
    toggleTheme: mockToggleTheme,
  };

  it("renders correctly with initial light theme", () => {
    render(
      <Router>
        <ThemeContext.Provider value={themeContextValue}>
          <ThemeProvider theme={LightTheme}>
            <ThemeSwitcher />
          </ThemeProvider>
        </ThemeContext.Provider>
      </Router>
    );

    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "false");
    expect(screen.getByText("🌞")).toBeInTheDocument();
  });

  it("toggles theme on button click", () => {
    render(
      <Router>
        <ThemeContext.Provider value={themeContextValue}>
          <ThemeProvider theme={LightTheme}>
            <ThemeSwitcher />
          </ThemeProvider>
        </ThemeContext.Provider>
      </Router>
    );

    fireEvent.click(screen.getByRole("switch"));
    expect(mockToggleTheme).toHaveBeenCalled();
  });

  it("has correct accessibility attributes", () => {
    render(
      <Router>
        <ThemeContext.Provider value={themeContextValue}>
          <ThemeProvider theme={LightTheme}>
            <ThemeSwitcher />
          </ThemeProvider>
        </ThemeContext.Provider>
      </Router>
    );

    const toggleButton = screen.getByRole("switch");
    expect(toggleButton).toHaveAttribute("aria-label", "Toggle Switch");
    expect(toggleButton).toHaveAttribute("role", "switch");
  });
});
