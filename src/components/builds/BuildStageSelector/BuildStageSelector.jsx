import { useState } from "react";
import { BUILD_STAGES } from "../../../data/builds/stages";
import "./BuildStageSelector.css";

function BuildStageSelector({ activeStage, setActiveStage }) {

    const stages = [
        { key: BUILD_STAGES.campaign, label: "Campaign" },
        { key: BUILD_STAGES.earlymaps, label: "Early Maps" },
        { key: BUILD_STAGES.midgame, label: "Midgame" },
        { key: BUILD_STAGES.endgame, label: "Endgame" },
    ];

    return (
        <div className="stage-selector">

            {stages.map((stage) => (
                <button
                    key={stage.key}
                    onClick={() => setActiveStage(stage.key)}
                    className={`stage-button ${activeStage === stage.key ? "active" : ""
                        }`}
                >
                    {stage.label}
                </button>
            ))}

        </div>
    );
}

export default BuildStageSelector;