import { Link } from "react-router-dom";
import Overlay from "../components/Overlay";
import MainContainer from "../components/MainContainer";
import "./Builds.css";

function Builds() {
    return (
        <div className="builds-page">

            <Overlay theme="infernal" />

            <div className="builds-content">

                <MainContainer>

                    <Link className="back-button" to="/">
                        Voltar para Home
                    </Link>

                    <h1 className="builds-title">
                        Builds
                    </h1>

                </MainContainer>

            </div>

        </div>
    );
}

export default Builds;