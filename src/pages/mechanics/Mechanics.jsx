import { Link } from "react-router-dom";
import Overlay from "../../components/layout/Overlay.jsx";
import MainContainer from "../../components/layout/MainContainer.jsx";
import "./Mechanics.css";
import MechanicsCard from "../../components/MechanicsCard.jsx";

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

                </MainContainer>

            </div>

        </div>
    );
}

export default Mechanics;