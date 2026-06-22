import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
// App significa que é um Componente
// creatRoot cria o que vai ser mostrado na tela
// render como o proprio nome diz, renderiza o que tem dentro do createRoot, ou seja, o App.jsx

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)