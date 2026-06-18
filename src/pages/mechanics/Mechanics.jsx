import { Link } from "react-router-dom";

import Overlay from "../../components/layout/Overlay.jsx";
import MainContainer from "../../components/layout/MainContainer.jsx";
import MechanicsCard from "../../components/MechanicsCard.jsx";

import { mechanicsData }
    from "../../data/mechanics/mechanicsData";

import "./Mechanics.css";

function Mechanics() {

    return (

        <div className="mechanics-page">

            <Overlay theme="templo" />

            <div className="mechanics-content">

                <MainContainer>

                    <div className="navigation-links">

                        <Link
                            className="back-button"
                            to="/"
                        >
                            Home
                        </Link>

                        <Link
                            className="back-button"
                            to="/farms"
                        >
                            Farms
                        </Link>

                    </div>

                    <h1>Mecânicas do Jogo</h1>

                    <div className="mechanics-grid">

                        {mechanicsData.map((mechanic) => (

                            <MechanicsCard

                                key={mechanic.title}

                                title={mechanic.title}

                                description={mechanic.description}

                                image={mechanic.image}

                                link={mechanic.link}

                            />

                        ))}

                    </div>

                </MainContainer>

            </div>

        </div>

    );
}

export default Mechanics;