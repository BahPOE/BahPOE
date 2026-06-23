import { Link } from "react-router-dom";

import Overlay from "../../components/layout/Overlay.jsx";
import MainContainer from "../../components/layout/MainContainer.jsx";
import FarmCard from "../../components/FarmCard.jsx";

import farms from "../../data/farms/index.js";

import "./Farms.css";

import { useState } from "react";

function Farms() {

    const [selectedMechanic, setSelectedMechanic] = useState("all");

    const [selectedStage, setSelectedStage] = useState("all");

    const mechanics = [

        "all",

        ...new Set(
            farms.map((farm) => farm.category)
        )
    ];

    const stages = [

        "all",

        ...new Set(
            farms.map((farm) => farm.variant)
        )
    ];

    const filteredFarms = farms.filter((farm) => {

        const mechanicMatch =

            selectedMechanic === "all" ||
            farm.category === selectedMechanic;

        const stageMatch =

            selectedStage === "all" ||
            farm.variant === selectedStage;

        return mechanicMatch && stageMatch;
    });

    return (
        <div className="farms-page">

            <Overlay theme="selva" />

            <div className="farms-content">

                <MainContainer>

                    <div className="navigation-links">

                        <Link
                            className="back-button"
                            to="/">
                            Home
                        </Link>

                        <Link
                            className="back-button"
                            to="/builds"
                        >
                            Builds
                        </Link>

                        <Link
                            className="back-button"
                            to="/mechanics"
                        >
                            Mecânicas
                        </Link>

                    </div>

                    <div className="farms-header">

                        <div className="farms-header-left">

                            <h1 className="farms-title">
                                Farms
                            </h1>

                        </div>

                        <div className="farm-filters">

                            <div>

                                <span className="filter-label">
                                    Progressão
                                </span>

                                <div className="filter-group">

                                    {mechanics.map((mechanic) => (

                                        <button
                                            key={mechanic}

                                            className={
                                                selectedMechanic === mechanic
                                                    ? "filter-button active"
                                                    : "filter-button"
                                            }

                                            onClick={() =>
                                                setSelectedMechanic(mechanic)
                                            }
                                        >
                                            {mechanic === "all"
                                                ? "Todos"
                                                : mechanic
                                            }
                                        </button>

                                    ))}

                                </div>

                            </div>

                            <div>

                                <span className="filter-label">
                                    Mecânica
                                </span>


                                <div className="filter-group">

                                    {stages.map((stage) => (

                                        <button
                                            key={stage}

                                            className={
                                                selectedStage === stage
                                                    ? "filter-button active"
                                                    : "filter-button"
                                            }

                                            onClick={() =>
                                                setSelectedStage(stage)
                                            }
                                        >
                                            {stage === "all"
                                                ? "Todos"
                                                : stage
                                            }
                                        </button>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="farms-list">

                        {filteredFarms.map((farm) => (

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