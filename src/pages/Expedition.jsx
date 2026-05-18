import { Link } from "react-router-dom";

import Overlay from "../components/Overlay";
import MainContainer from "../components/MainContainer";
import NpcCard from "../components/expedition/NpcCard";
import LoopCard from "../components/expedition/LoopCard";
import InfoCard from "../components/expedition/InfoCard";
import { npcs, expeditionLoop } from "../data/expedition/expeditionData";
import BossCard from "../components/expedition/BossCard";
import { expeditionBosses } from "../data/expedition/expeditionBossesData";

import "./Expedition.css";

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

                    <section className="expedition-section">

                        <h2>
                            Tipos de inimigos da Expedition
                        </h2>

                        <InfoCard className="enemy-card">

                            <h3>Categorias de Inimigos</h3>

                            <ul className="enemy-list">

                                <li>
                                    <strong>Caveiras pequenas:</strong> Monstros normais com os modificadores do evento
                                </li>

                                <li>
                                    <strong>Caveiras Maiores:</strong> Runic Monsters, esses dropam Artefatos, Itens para dar Refresh na loja e Logbook's
                                </li>

                                <li>
                                    <strong>Baús:</strong> A bandeira indica qual o tipo de baú que vai aparecer, a cor da bandeira indica o valor do seu conteúdo sendo Branca - Menor  Amarela - Media  Vermelha - Grande
                                </li>

                            </ul>

                        </InfoCard>

                        <InfoCard className="enemy-card">

                            <h3>Herança de Modificadores</h3>

                            <p>
                                Os modificadores são herdados pelas explosões seguintes,
                                então posicionar corretamente as bombas aumenta muito
                                sua eficiência.
                            </p>

                            <p>
                                Exemplo:
                                Runic Monsters com
                                <strong> 40% increased quantity </strong>.
                            </p>

                            <p>
                                Se você acumular 3 modificadores desse tipo,
                                os monstros rúnicos terão um bônus total de
                                <strong> 120% quantity</strong>,
                                aumentando muito os drops.
                            </p>

                        </InfoCard>

                        <InfoCard className="enemy-card">

                            <h3>Planejamento das bombas</h3>

                            <p>
                                Antes de focar apenas nas recompensas,
                                verifique quais modificadores negativos
                                sua build consegue lidar.
                            </p>

                            <p>
                                Por exemplo:
                                builds baseadas em leech podem ser
                                completamente anuladas por modificadores
                                que impedem roubo de vida.
                            </p>

                        </InfoCard>

                        <InfoCard className="enemy-card warning-card">

                            <h3>Cuidado com modificadores negativos</h3>

                            <p>
                                Quanto maiores as recompensas,
                                maior também a dificuldade.
                                Alguns modificadores podem praticamente
                                "brickar" seu mapa.
                            </p>

                            <ul className="danger-list">

                                <li>
                                    Imunidade a tipos de dano
                                </li>

                                <li>
                                    Chance de block acumulada até 100%
                                </li>

                                <li>
                                    Regeneração extremamente alta
                                </li>

                            </ul>

                        </InfoCard>

                        <p className="boss-intro">
                            Existem 4 bosses exclusivos encontrados apenas em Logbooks.
                            <br />
                            Em média, eles aparecem a cada 5 áreas.
                        </p>

                        <div className="boss-list">

                            <div className="boss-card">

                                <h3>Olroth</h3>

                                <p>
                                    Danning — Knights of the Sun
                                </p>

                                <span>Área level 81+</span>

                            </div>

                            <div className="boss-card">

                                <h3>Medved</h3>

                                <p>
                                    Gwennen — Druids of the Broken Circle
                                </p>

                                <span>Área level 68+</span>

                            </div>

                            <div className="boss-card">

                                <h3>Uhtred</h3>

                                <p>
                                    Rog — Order of the Chalice
                                </p>

                                <span>Área level 75+</span>

                            </div>

                            <div className="boss-card">

                                <h3>Vorana</h3>

                                <p>
                                    Tujen — Black Scythe Mercenaries
                                </p>

                                <span>Área level 68+</span>

                            </div>

                        </div>

                    </section>

                    {/* BOSS */}

                    <section className="expedition-section">

                        <div>

                            <h2>Bosses da Expedition</h2>

                            {expeditionBosses.map((boss) => (

                                <BossCard
                                    key={boss.name}
                                    boss={boss}
                                />

                            ))}

                        </div>

                    </section>

                </MainContainer>

            </div>

        </div >
    );
}

export default Expedition;