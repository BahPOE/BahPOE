import "./FarmCard.css";
import expeditionScarab from "../assets/scarabs/expedition/expeditionScarab.png";
import ScarabItem from "./ScarabItem";

function FarmCard({
    title,variant,difficulty,buildType,description,atlasLink,scarabs,
}) {
    return (

        <div className="farm-card">

            {/* COLUNA ESQUERDA */}
            <div className="farm-info">

                <h2 className="farm-title">
                    {title}
                </h2>

                <div className="farm-tags">

                    <span>{variant}</span>

                    <span>{difficulty}</span>

                    <span>{buildType}</span>

                </div>

                <p className="farm-description">

                    {description}

                </p>

                <a
                    className="farm-link"
                    href={atlasLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Atlas Tree
                </a>

            </div>

            {/* COLUNA CENTRAL */}
            <div className="farm-scarabs">

                <h3>Scarabs</h3>

                {scarabs}

            </div>

            {/* COLUNA DIREITA */}
            <div className="farm-layout">

                <h3>Layouts</h3>

                <span>Dunes</span>

                <span>Jungle Valley</span>

                <div className="map-device">

                    <strong>Map Device:</strong>

                    <span>Quantity Extra</span>

                </div>

            </div>

        </div>
    );
}

export default FarmCard;