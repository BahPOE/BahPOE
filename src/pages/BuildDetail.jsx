// src/pages/BuildDetail.jsx
// Tauma: Página de detalhe da build, exibindo informações completas
import { useParams } from "react-router-dom";
import Overlay from "../components/Overlay";
import MainContainer from "../components/MainContainer";
import "./BuildDetail.css";
import { listaBuilds } from "../builds.js";
import BuildCards from "../components/BuildCard";

export default function BuildDetail() {
  const { id } = useParams();
  const build = listaBuilds.find((b) => b.id === Number(id));

  if (!build) {
    return (
      <div className="build-detail-page">
        <Overlay theme="infernal" />
        <MainContainer>
          <h2>Build não encontrada</h2>
        </MainContainer>
      </div>
    );
  }

  return (
    <div className="build-detail-page">
      <Overlay theme="infernal" />
      <MainContainer>
        {/* Reutilizamos o mesmo cartão, mas em tamanho maior */}
        <BuildCards build={build} />
        {/* Área para informações extras – por enquanto placeholder */}
        <div className="extra-info" style={{ marginTop: "20px", color: "#ddd" }}>
          <h3>Detalhes adicionais</h3>
          <p>Aqui você pode colocar guias, vídeos, screenshots, etc.</p>
        </div>
      </MainContainer>
    </div>
  );
}
