import { Route, Routes } from "react-router-dom";
import { CharacterScreen } from "./screens/character/CharacterScreen";
import { SearchScreen } from "./screens/search/SearchScreen";
import { NoFoundScreen } from "./screens/noFound/NoFoundScreen";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchScreen />} />
      <Route path="/people/:id" element={<CharacterScreen />} />
      <Route path="*" element={<NoFoundScreen />} />
    </Routes>
  );
}
