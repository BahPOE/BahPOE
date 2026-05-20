import { Link } from "react-router-dom";
import Overlay from "../components/layout/Overlay.jsx";
import MainContainer from "../components/layout/MainContainer.jsx";
import "./Mechanics.css";
import MechanicsCard from "../components/MechanicsCard";
import expeditionImage from "../assets/mechanics/expedition/logo-expedition.jpg"

function Mechanics() {
    return (
        <div className="mechanics-page">
            <Overlay theme="templo" />

            <div className="mechanics-content">

                <MainContainer>

                    <Link className="back-button" to="/">
                        Voltar para Home
                    </Link>

                    <h1>Mecânicas do Jogo</h1>

                    <div className="mechanics-grid">
                        <MechanicsCard
                            title="Expedition"
                            description="Artefatos, Remnants e Logbooks"
                            image={expeditionImage}
                            link="/mechanics/expedition"
                        />
                    </div>

                </MainContainer>

            </div>

        </div>
    );
}

export default Mechanics;