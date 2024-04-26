import "./App.css";
import { Characters } from "pages/characters/characters";
import { Character } from "pages/character/character";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h2>Welcome to Rick and Morty world!</h2>

      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
