import { Link } from "react-router-dom";

import Overlay from "../../../components/layout/Overlay.jsx";
import MainContainer from "../../../components/layout/MainContainer.jsx";

import InfoCard from "../../../components/mechanics/abyss/InfoCard.jsx";

import AbyssGroups from "../../../components/mechanics/abyss/sections/AbyssGroups.jsx";
import AbyssEvents from "../../../components/mechanics/abyss/sections/AbyssEvents.jsx";
import AbyssEnemies from "../../../components/mechanics/abyss/sections/AbyssEnemies.jsx";
import AbyssBosses from "../../../components/mechanics/abyss/sections/AbyssBosses.jsx";

import "./Abyss.css";

function Abyss() {

    return (

        <div className="abyss-page">

            <Overlay theme="selva" />

            <div className="abyss-content">

                <MainContainer>

                    <Link
                        className="back-button"
                        to="/mechanics"
                    >
                        Voltar para Mecânicas
                    </Link>

                    {/* HEAD */}

                    <section className="abyss-main">

                        <h1 className="abyss-title">
                            Abyss
                        </h1>

                        <p className="abyss-subtitle">
                            Crateras, Báus e Jewels.
                        </p>

                        <div className="abyss-divider" />

                    </section>

                    {/* INTRODUÇÃO */}

                    <section className="abyss-section">

                        <h2>O que é Abyss?</h2>

                        <p className="abyss-intro">
                            Quando você passa por cima de um Abyss, uma rachadura se abre no chão e saem alguns monstros dali.
                            Conforme você vai seguindo a rachadura, ela vai aumentando até abrir um buraco maior (uma cratera),
                            que brota muito mais monstros.
                        </p>

                        <p>
                            Se você demorar muito para seguir a rachadura ou não matar os inimigos rápido o suficiente, o abismo fecha.
                            Executando de forma correta ele abre outra rachadura que leva a mais uma cratera.
                            Um único Abyss pode abrir de uma a quatro crateras.
                            As rachaduras não se cruzam então o Abyss pode acabar antes da hora se ele ficar encurralado em algum canto do mapa.
                        </p>

                        <p>
                            Se você limpar todos os monstros da última cratera, vai aparecer um Abyssal Trove (o baú do abismo) cheio de loot. Além dos itens normais, ele sempre vem com pelo menos uma Abyss Jewel (Joia Abissal). Às vezes, em vez do baú, nasce um monstro especial chamado Stygian Spire, que dropa um cinto Stygian Vise além de todas as recompensas que o baú daria.
                        </p>

                        <InfoCard className="intro-warning-card">

                            <h3>Abyssal Depths</h3>

                            <p>
                                Ela só aparece em mapas tier 11+ (nível 78+), se o Abyss tiver quatro crateras, em vez do baú ou do Spire, pode abrir um portal para o Abyssal Depths (as Profundezas Abissais), onde você enfrenta um boss da mecânica: o Abyssal Lich.
                                O nível da área ali dentro é sempre o mesmo do mapa onde você estava (o mínimo é 78 e o máximo natural é 84, entrando por um mapa T17).
                            </p>

                            <p>
                                Lá dentro você sempre vai enfrentar um de dois Liches ( Ulaman ou Amanamu ). A mecânica da luta é a seguinte: a cada 25% de vida que o boss perde, ele some e começa a correr um cronômetro de 1 minuto e 30 segundos. Você precisa entrar correndo numa salinha menor, quebrar o Stygian Spire que está lá dentro e voltar para a arena principal. 
                            </p>

                            <p>
                                O tempo não reseta entre as fases, ele só pausa quando você destrói o Spire. Você precisa quebrar os três Spires dentro desse tempo total, senão o boss foge e a luta acaba.
                            </p>

                            <p>
                                Os Liches sempre dropam um Stygian Vise raro e têm chance de dropar joias abissais únicas ou um dos 5 itens únicos temáticos de Abyss (alguns vêm com número variado de espaços para joias).
                            </p>

                        </InfoCard>

                    </section>

                    {/* SECTIONS */}

                    <AbyssGroups />

                    <AbyssEvents />

                    <AbyssEnemies />

                    <AbyssBosses />

                </MainContainer>

            </div>

        </div>

    );
}

export default Abyss;