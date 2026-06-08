import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Mechanics from "../src/pages/mechanics/Mechanics";
import Builds from "../src/pages/builds/Builds";
import Expedition from "../src/pages/mechanics/Expedition";
import ExpeditionShared from "../src/pages/mechanics/ExpeditionShared";
import Abyss from "../src/pages/mechanics/abyss/Abyss";
import Farms from "../src/pages/farms/Farms";
import BuildDetail from "../src/pages/builds/BuildDetail"; // Tauma: página de detalhe da build

// import Mechanics from "./pages/Mechanics";
// import Expedition from "./pages/Expedition";
// import Farms from "./pages/Farms";
// import Builds from "./pages/Builds";
// import BuildDetail from "./pages/BuildDetail";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/mechanics" element={<Mechanics />} />

      <Route path="/builds" element={<Builds />} />

      <Route path="/mechanics/expedition"
        element={<Expedition />} />

      <Route
        path="/mechanics/expedition-shared"
        element={<ExpeditionShared />}
      />

      <Route path="/mechanics/abyss"
        element={<Abyss />} />

      <Route path="/farms" element={<Farms />} />

      <Route path="/build/:id" element={<BuildDetail />} /> {/* Tauma: rota dinâmica para detalhes */}
    </Routes>

  );
}

export default App;