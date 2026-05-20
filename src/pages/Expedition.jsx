import { Link } from "react-router-dom";

import Overlay from "../components/layout/Overlay.jsx";
import MainContainer from "../components/layout/MainContainer.jsx";

import InfoCard from "../components/expedition/InfoCard.jsx";

import ExpeditionGroups from "../components/expedition/sections/ExpeditionGroups.jsx";
import ExpeditionLogbooks from "../components/expedition/sections/ExpeditionLogbooks.jsx";
import ExpeditionEvents from "../components/expedition/sections/ExpeditionEvents.jsx";
import ExpeditionEnemies from "../components/expedition/sections/ExpeditionEnemies.jsx";
import ExpeditionBosses from "../components/expedition/sections/ExpeditionBosses.jsx";

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

                    {/* SECTIONS */}

                    <ExpeditionGroups />

                    <ExpeditionLogbooks />

                    <ExpeditionEvents />

                    <ExpeditionEnemies />

                    <ExpeditionBosses />

                </MainContainer>

            </div>

        </div>

    );
}

export default Expedition;