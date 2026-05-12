import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Mechanics from "./pages/Mechanics";
import Farms from "./pages/Farms";
import Builds from "./pages/Builds";
import BuildDetail from "./pages/BuildDetail"; // Tauma: página de detalhe da build

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mechanics" element={<Mechanics />} />
      <Route path="/farms" element={<Farms />} />
      <Route path="/builds" element={<Builds />} />
      <Route path="/build/:id" element={<BuildDetail />} /> {/* Tauma: rota dinâmica para detalhes */}
    </Routes>
  );
}

export default App;