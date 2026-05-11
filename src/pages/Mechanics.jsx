import { Link } from "react-router-dom";
import Overlay from "../components/Overlay";
import MainContainer from "../components/MainContainer";
import "./Mechanics.css";

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