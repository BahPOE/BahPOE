import { Link } from "react-router-dom";

import Overlay from "../../components/layout/Overlay.jsx";
import MainContainer from "../../components/layout/MainContainer.jsx";
import FarmCard from "../../components/FarmCard.jsx";

import expeditionFarmData from "../../data/farms/expeditionFarmData.js";

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

                        {expeditionFarmData.map((farm) => (

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