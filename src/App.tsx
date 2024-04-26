import { Characters } from "pages/characters/characters";
import { Character } from "pages/character/character";
import { Routes, Route } from "react-router-dom";
import { StyledApp } from "App.styled";
import { AppBar } from "components/AppBar/AppBar";
function App() {
  return (
    <StyledApp className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
