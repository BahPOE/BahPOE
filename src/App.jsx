import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Mechanics from "./pages/Mechanics";
import Farms from "./pages/Farms";
import Builds from "./pages/Builds";
// Componentes no React são assim
// 1) O nome do componente tem que começar com letra maiúscula, para o React entender que é um componente
// 2) Ele tem um Return que retorna o que vai ser mostrado na tela, ou seja, o JSX (HTML + JavaScript) que vai ser renderizado na tela
// Fora do Return é código JavaScript, ou seja, lógica, funções, etc
// Dentro do return é JSX (HTML + JavaScript)
// Dentro do Return, para usar JavaScript, tem que usar chaves {}, ou seja, é possível misturar JavaScript e HTML dentro do Return
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mechanics"
      element={<Mechanics />} />
      <Route path="/farms"
      element={<Farms />} />
      <Route path="/builds"
      element={<Builds />} />
    </Routes>
  );
}

export default App;