import { useState } from "react"; // Tauma: Importando o useState para controlar as páginas
import { Link } from "react-router-dom";
import Overlay from "../components/Overlay";
import MainContainer from "../components/MainContainer";
import "./Builds.css";
import BuildCards from "../components/BuildCard";
import { listaBuilds } from "../builds.js";

function Builds() {
    // Tauma: Configurações de paginação
    const [paginaAtual, setPaginaAtual] = useState(1);
    const buildsPorPagina = 10;

    // Tauma: Calculando quais builds mostrar
    const ultimoIndex = paginaAtual * buildsPorPagina;
    const primeiroIndex = ultimoIndex - buildsPorPagina;
    const buildsExibidas = listaBuilds.slice(primeiroIndex, ultimoIndex);

    // Tauma: Calculando o total de páginas
    const totalPaginas = Math.ceil(listaBuilds.length / buildsPorPagina);

    // Tauma: Funções para mudar de página
    const mudarPagina = (numero) => {
        setPaginaAtual(numero);
        window.scrollTo(0, 0); // Tauma: Faz a página voltar para o topo ao mudar
    };

    return (
        <div className="builds-page">

            <Overlay theme="infernal" />

            <div className="builds-content">

                <MainContainer>

                    <Link className="back-button" to="/">
                        Voltar para Home
                    </Link>

                    <h1 className="builds-title">
                        Builds de Path of Exile
                    </h1>

                    {/* Exibição das Builds */}
                    <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                        {buildsExibidas.map((build) => (
                            <BuildCards key={build.id} build={build} />
                        ))}
                    </div>

                    {/* 
                        Tauma: Sistema de Paginação 
                        Aqui desenhamos os botões para navegar entre as páginas
                    */}
                    <div style={{ 
                        marginTop: '30px', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        gap: '15px',
                        color: '#4da6ff',
                        fontWeight: 'bold'
                    }}>
                        <button 
                            onClick={() => mudarPagina(Math.max(1, paginaAtual - 1))}
                            disabled={paginaAtual === 1}
                            style={{ background: 'transparent', border: 'none', color: paginaAtual === 1 ? '#555' : '#4da6ff', cursor: 'pointer', fontSize: '1.2rem' }}
                        >
                            &lt;
                        </button>

                        {[...Array(totalPaginas)].map((_, index) => (
                            <span 
                                key={index} 
                                onClick={() => mudarPagina(index + 1)}
                                style={{ 
                                    cursor: 'pointer', 
                                    color: paginaAtual === index + 1 ? '#fff' : '#4da6ff',
                                    borderBottom: paginaAtual === index + 1 ? '2px solid #fff' : 'none',
                                    padding: '0 5px'
                                }}
                            >
                                {index + 1}
                            </span>
                        ))}

                        <button 
                            onClick={() => mudarPagina(Math.min(totalPaginas, paginaAtual + 1))}
                            disabled={paginaAtual === totalPaginas}
                            style={{ background: 'transparent', border: 'none', color: paginaAtual === totalPaginas ? '#555' : '#4da6ff', cursor: 'pointer', fontSize: '1.2rem' }}
                        >
                            &gt;
                        </button>
                    </div>

                </MainContainer>

            </div>

        </div>
    );
}

export default Builds;