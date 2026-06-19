import { Link } from "react-router-dom";

import MainContainer from "../../components/layout/MainContainer.jsx";

import Overlay from "../../components/layout/Overlay.jsx";

import BuildCard from "../../components/builds/BuildCard/BuildCard.jsx";

import { buildsData } from "../../data/builds/buildsData.js";

import "./Builds.css";

function Builds() {

    return (

        <div className="builds-page">

            <Overlay theme="infernal" />

            <div className="builds-content">

                <MainContainer>

                    <div className="navigation-links">

                        <Link
                            className="back-button"
                            to="/">
                            Home
                        </Link>

                        <Link
                            className="back-button"
                            to="/farms">
                            Farms
                        </Link>

                        <Link
                            className="back-button"
                            to="/mechanics"
                        >
                            Mecânicas
                        </Link>

                    </div>

                    <div className="builds-grid">

                        {buildsData.map((build) => (

                            <BuildCard
                                key={build.id}
                                build={build}
                            />

                        ))}

                    </div>

                </MainContainer >

            </div>

        </div>

    );

}

export default Builds;