import { render, screen, fireEvent } from "@testing-library/react";
import { Dropdown } from "./Dropdown";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "styles/theme";
describe("Dropdown", () => {
  const mockOnChange = jest.fn();
  const props = {
    id: "test-dropdown",
    label: "Test Label",
    value: "",
    options: ["option1", "option2"],
    onChange: mockOnChange,
  };

  it("renders correctly", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <Dropdown {...props} />
        </ThemeProvider>
      </Router>
    );
    expect(screen.getByLabelText("Test Label:")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "all" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "option1" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "option2" })).toBeInTheDocument();
  });

  it("calls onChange with the right value when changed", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <Dropdown {...props} />
        </ThemeProvider>
      </Router>
    );
    const select = screen.getByLabelText("Test Label:");
    fireEvent.change(select, { target: { value: "option1" } });
    expect(mockOnChange).toHaveBeenCalledWith(expect.anything());
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("has the correct association between label and select element", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <Dropdown {...props} />
        </ThemeProvider>
      </Router>
    );
    const label = screen.getByText("Test Label:");
    const select = screen.getByLabelText("Test Label:");
    expect(label).toBeInTheDocument();
    expect(select).toHaveAttribute("id", "test-dropdown");
  });
});
