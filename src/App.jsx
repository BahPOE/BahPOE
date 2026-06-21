import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Mechanics from "../src/pages/mechanics/Mechanics";
import Builds from "../src/pages/builds/Builds";
import BuildShared from "./pages/builds/BuildShared";
import ExpeditionShared from "../src/pages/mechanics/ExpeditionShared";
import Farms from "../src/pages/farms/Farms";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/mechanics" element={<Mechanics />} />

      <Route path="/builds" element={<Builds />} />

      <Route path="/builds/:slug" element={<BuildShared />} />

      <Route path="/mechanics/expedition-shared" element={<ExpeditionShared />} />

      <Route path="/farms" element={<Farms />} />

    </Routes>

  );
}

export default App;