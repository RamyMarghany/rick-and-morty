import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { StyledToggleButton } from "./ThemeSwitcher.styled";

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as {
    theme: string;
    toggleTheme: (theme: string) => void;
  };

  const handleToggle = () => {
    toggleTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <StyledToggleButton
      className={`toggle-switch ${theme === "dark" ? "dark" : ""}`}
      onClick={handleToggle}
      aria-label="Toggle Switch"
      role="switch"
      aria-checked={theme === "dark"}
    >
      <div className="track-dark-check">
        <span className="toggle-dark-icon">🌜</span>
      </div>
      <div className="track-light-check">
        <span className="toggle-dark-icon">🌞</span>
      </div>
      <div className="slider"></div>
    </StyledToggleButton>
  );
};
