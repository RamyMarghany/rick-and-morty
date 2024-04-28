import { Routes, Route } from "react-router-dom";
import { Characters } from "pages/Characters/Characters";
import { Character } from "pages/Character/Character";
import { AppBar } from "components/AppBar/AppBar";
import { StyledApp, StyledAppWrapper } from "App.styled";
function App() {
  return (
    <StyledApp className="App">
      <AppBar />
      <StyledAppWrapper>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/characters/:id" element={<Character />} />
        </Routes>
      </StyledAppWrapper>
    </StyledApp>
  );
}

export default App;
