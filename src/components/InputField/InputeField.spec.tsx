import { render, screen, fireEvent } from "@testing-library/react";
import { InputField } from "./InputField";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "styles/theme";
describe("InputField", () => {
  test("renders correctly with minimal props", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <InputField
            id="test-input"
            type="text"
            value=""
            onChange={() => {}}
          />
        </ThemeProvider>
      </Router>
    );
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  test("renders label when provided", () => {
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <InputField
            id="test-input"
            type="text"
            value=""
            onChange={() => {}}
            label="label"
          />
        </ThemeProvider>
      </Router>
    );
    const labelElement = screen.getByLabelText("label");
    expect(labelElement).toBeInTheDocument();
  });

  test("input has correct type, placeholder, and value", () => {
    const placeholder = "Enter your email";
    const value = "user@example.com";
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <InputField
            id="test-input"
            type="text"
            onChange={() => {}}
            placeholder={placeholder}
            value={value}
          />
        </ThemeProvider>
      </Router>
    );
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type");
    expect(input).toHaveAttribute("placeholder", placeholder);
    expect(input).toHaveValue(value);
  });

  test("onChange handler is called when input changes", () => {
    const handleChange = jest.fn();
    render(
      <Router>
        <ThemeProvider theme={LightTheme}>
          <InputField
            id="test-input"
            type="text"
            value="value"
            onChange={handleChange}
          />
        </ThemeProvider>
      </Router>
    );
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
