import { Link } from "react-router-dom";

import Overlay from "../components/Overlay";
import MainContainer from "../components/MainContainer";
import NpcCard from "../components/expedition/NpcCard";
import LoopCard from "../components/expedition/LoopCard";
import InfoCard from "../components/expedition/InfoCard";
import { npcs, expeditionLoop } from "../data/expedition/expeditionData";
import BossCard from "../components/expedition/BossCard";
import { expeditionBosses } from "../data/expedition/expeditionBossesData";
import ExpeditionEnemies from "../components/expedition/sections/ExpeditionEnemies";

import "./Expedition.css";
import ExpeditionBosses from "../components/expedition/sections/ExpeditionBosses";

function Expedition() {

    return (

        <div className="expedition-page">

            <Overlay theme="selva" />

            <div className="expedition-content">

                <MainContainer>

                    <Link
                        className="back-button"
                        to="/mechanics"
                    >
                        Voltar para Mecânicas
                    </Link>

                    {/* HEAD */}

                    <section className="expedition-main">

                        <h1 className="expedition-title">
                            Expedition
                        </h1>

                        <p className="expedition-subtitle">
                            Explosivos, artefatos,
                            NPCs mercadores e Logbooks.
                        </p>

                        <div className="expedition-divider" />

                    </section>

                    {/* INTRODUÇÃO */}

                    <section className="expedition-section">

                        <h2>O que é Expedition?</h2>

                        <p className="expedition-intro">
                            Expedition é uma mecânica onde um dos
                            quatro NPCs exploradores aparece no mapa
                            pedindo sua ajuda para escavar ruínas antigas.
                        </p>

                        <p>
                            Você posiciona explosivos manualmente
                            e depois ativa o detonador,
                            revelando monstros, baús
                            e modificadores especiais.
                        </p>

                        <InfoCard className="intro-warning-card">

                            <h3>Importante</h3>

                            <p>
                                Os modificadores são herdados
                                pelas explosões seguintes,
                                tanto os positivos quanto os negativos.
                            </p>

                        </InfoCard>

                    </section>

                    {/* GRUPOS */}

                    <section className="expedition-section">

                        <h2>Grupos de Exploração</h2>

                        <p className="group-intro">
                            Cada NPC pertence a um grupo de exploração diferente
                            e possui mecânicas próprias de loja e interação.
                        </p>

                        <p className="group-intro">
                            Para negociar com eles,
                            você precisa obter artefatos específicos daquele grupo.
                        </p>

                        <div className="npc-grid">

                            {npcs.map((npc) => (

                                <NpcCard
                                    key={npc.title}
                                    title={npc.title}
                                    description={npc.description}
                                />

                            ))}

                        </div>

                        <div className="mechanic-loop-section">

                            <h3>Loop da Mecânica</h3>

                            <p className="loop-description">
                                O ciclo principal da Expedition é simples:
                            </p>

                            <div className="loop-grid">

                                {expeditionLoop.map((step) => (

                                    <LoopCard
                                        key={step}
                                        text={step}
                                    />
                                ))}

                            </div>
                        </div>

                        <p className="group-conclusion">
                            Apesar de parecer complexo no início,
                            o fluxo das lojas é rápido de aprender
                            e fica natural depois de algumas interações.
                        </p>

                    </section>

                    {/* LOGBOOK */}

                    <section className="expedition-section">

                        <h2>Logbooks</h2>

                        <InfoCard className="logbook-card">

                            <h3>O que são Logbooks?</h3>

                            <p>
                                Além dos encontros nos mapas,
                                existe também a versão dedicada da mecânica:
                                os Logbooks.
                            </p>

                        </InfoCard>

                        <InfoCard className="logbook-card">

                            <h3>Como funciona</h3>

                            <p>
                                Para acessar um Logbook,
                                fale com Danning e selecione a área desejada.
                            </p>

                            <p>
                                O mapa inteiro será focado em Expedition,
                                com muito mais explosivos disponíveis.
                            </p>

                            <p>
                                Os monstros encontrados no final das rotas
                                podem ficar extremamente fortes,
                                então planeje bem suas explosões.
                            </p>

                        </InfoCard>

                        <InfoCard className="logbook-card">

                            <h3>Elementos especiais</h3>

                            <ul className="logbook-list">

                                <li>
                                    Barreiras destrutíveis
                                </li>

                                <li>
                                    Cavernas subterrâneas
                                </li>

                                <li>
                                    Arenas de Boss
                                </li>

                                <li>
                                    Shrines
                                </li>

                            </ul>

                            <p>
                                Tudo relacionado à mecânica
                                precisa passar pela área de explosão.
                                Esse é o trigger principal da Expedition.
                            </p>

                        </InfoCard>

                    </section>

                    {/* DIFERENÇAS ENTRE OS EVENTOS */}

                    <section className="expedition-section">

                        <h2>Diferença entre os eventos</h2>

                        <p className="event-intro">
                            Ambos os formatos da mecânica são excelentes,
                            porém cada um possui um foco diferente.
                        </p>

                        <div className="event-grid">

                            <InfoCard className="event-card">

                                <h3>Atlas Maps</h3>

                                <ul>

                                    <li>
                                        Maior foco em artefatos
                                    </li>

                                    <li>
                                        Melhor para farmar Logbooks
                                    </li>

                                    <li>
                                        Mais rápido para encontros frequentes
                                    </li>

                                </ul>

                            </InfoCard>

                            <InfoCard className="event-card">

                                <h3>Logbooks</h3>

                                <ul>

                                    <li>
                                        Grande quantidade de artefatos
                                    </li>

                                    <li>
                                        Muito foco em currency de refresh
                                    </li>

                                    <li>
                                        Possibilidade de enfrentar bosses
                                    </li>

                                    <li>
                                        Não dropa outros Logbooks
                                    </li>

                                </ul>

                            </InfoCard>

                        </div>

                    </section>

                    {/* TIPOS DE INIMIGOS */}

                    <ExpeditionEnemies />

                    {/* BOSS */}

                    <ExpeditionBosses />

                </MainContainer>

            </div>

        </div >
    );
}

export default Expedition;