import { Link } from "react-router-dom";

import Overlay from "../components/Overlay";
import MainContainer from "../components/MainContainer";

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

                    <h1 className="expedition-title">
                        Expedition
                    </h1>

                    <div className="expedition-card">

                        <h2>O que é Expedition?</h2>

                        <p>
                            Mecânica focada em explosivos,
                            artefatos, NPCs e Logbooks.
                        </p>

                    </div>

                </MainContainer>

            </div>

        </div>
    );
}

export default Expedition;