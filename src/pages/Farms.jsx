import { Link } from "react-router-dom";

import Overlay from "../components/Overlay";
import MainContainer from "../components/MainContainer";
import FarmCard from "../components/FarmCard";
import ScarabItem from "../components/ScarabItem";
import expeditionScarab from "../assets/scarabs/expedition/expeditionScarab.png";

import "./Farms.css";

function Farms() {
    return (
        <div className="farms-page">

            <Overlay theme="selva" />

            <div className="farms-content">

                <MainContainer>

                    <Link className="back-button" to="/">
                        Voltar para Home
                    </Link>

                    <h1 className="farms-title">
                        Farms
                    </h1>

                    <div className="farms-list">

                        <FarmCard
                            title="Expedition"
                            variant={
                                <spam className="tag-early">
                                    Early
                                </spam>
                            }
                            difficulty={
                                <spam className="tag-facil">
                                    Fácil
                                </spam>
                            }
                            buildType={
                                <spam className="tag-clear">
                                    Map Clear
                                </spam>
                            }
                            description="Farm focado em Artefatos."
                            atlasLink="https://poeplanner.com/a/6J-y"
                            scarabs={
                                <div className="farm-empty">
                                    Nenhum Scarab Necessário
                                </div>
                            }
                        />

                        <FarmCard
                            title="Expedition"
                            variant={
                                <spam className="tag-mid-game">
                                    Mid-Game
                                </spam>
                            }
                            difficulty={
                                <spam className="tag-medio">
                                    Médio
                                </spam>
                            }
                            buildType={
                                <spam className="tag-clear">
                                    Map Clear
                                </spam>
                            }
                            description="Farm focado em Logbooks."
                            atlasLink="https://poeplanner.com/a/6J-1"
                            scarabs={
                                <>
                                    <ScarabItem
                                        icon={expeditionScarab}
                                        name="Expedition Scarab"
                                        amount={1}
                                    />
                                </>
                            }
                        />

                    </div>
                </MainContainer>

            </div>

        </div>
    );
}

export default Farms;