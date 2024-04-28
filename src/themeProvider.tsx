import { useState, useMemo, useCallback } from "react";
import {
  ThemeContext,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { LightTheme, DarkTheme } from "styles/theme";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
