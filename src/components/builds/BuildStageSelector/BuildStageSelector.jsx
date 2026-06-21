import "./BuildStageSelector.css";

function BuildStageSelector() {

    return (

        <div className="build-stage-selector">

            <button className="stage-button active">
                Campaign
            </button>

            <button className="stage-button">
                Early Maps
            </button>

            <button className="stage-button">
                Midgame
            </button>

            <button className="stage-button">
                Endgame
            </button>

        </div>

    );

}

export default BuildStageSelector;