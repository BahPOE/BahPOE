import { useState } from "react";
import { BUILD_STAGES } from "../../../data/builds/stages";
import "./BuildStageSelector.css";

function BuildStageSelector({ activeStage, setActiveStage }) {

    return (

        <div className="build-stage-selector">

            {Object.values(BUILD_STAGES).map((stage) => {
                return (
                    <button
                        key={stage}
                        className={`stage-button ${activeStage === stage ? "active" : ""}`}
                        onClick={() => setActiveStage(stage)}
                    >
                        {stage}
                    </button>
                );
            })}

        </div>
    );
}

export default BuildStageSelector;