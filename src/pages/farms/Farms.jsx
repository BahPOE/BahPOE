import { Link } from "react-router-dom";

import Overlay from "../../components/layout/Overlay.jsx";
import MainContainer from "../../components/layout/MainContainer.jsx";
import FarmCard from "../../components/FarmCard.jsx";

import farms from "../../data/farms/index.js";

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

                        {farms.map((farm) => (

                            <FarmCard
                                key={farm.id}
                                farm={farm}
                            />

                        ))}

                    </div>
                </MainContainer>

            </div>

        </div>
    );
}

export default Farms;