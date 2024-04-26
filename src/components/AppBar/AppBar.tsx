import { ThemeSwitcher } from "components/ThemeSwitcher/ThemeSwitcher";

import { StyledAppBar, StyledLink } from "./App.styled";
export const AppBar: React.FC = () => {
  return (
    <StyledAppBar>
      <StyledLink to="/">Home</StyledLink>
      <ThemeSwitcher />
    </StyledAppBar>
  );
};
