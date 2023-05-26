import { Route, Routes } from "react-router-dom";
import { CharacterScreenParamsWrapper } from "./screens/character/CharacterScreen";
import { SearchScreen } from "./screens/search/SearchScreen";
import { NoFoundScreen } from "./screens/noFound/NoFoundScreen";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchScreen />} />
      <Route path="/people/:id" element={<CharacterScreenParamsWrapper />} />
      <Route path="*" element={<NoFoundScreen />} />
    </Routes>
  );
}
