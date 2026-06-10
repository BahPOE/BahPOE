import "./FarmCard.css";

import Tag from "./general/Tag.jsx";

function FarmCard({ farm }) {

    const {
        title,
        variant,
        difficulty,
        buildType,
        description,
        atlasLink,
        scarabs,
        layouts,
        mapDevice,
    } = farm;

    return (

        <div className="farm-card">

            {/* COLUNA ESQUERDA */}
            <div className="farm-info">

                <h2 className="farm-title">
                    {title}
                </h2>

                <div className="farm-tags">

                    <Tag type={variant} />
                    <Tag type={difficulty} />
                    <Tag type={buildType} />

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

                <h3>Consumíveis</h3>

                {scarabs?.length > 0 ? (
                    scarabs.map((scarab) => (
                        <div key={scarab.name}>
                            {scarab.amount}x {scarab.name}
                        </div>
                    ))
                ) : (
                    <div className="farm-empty">
                        Nenhum consumível necessário
                    </div>
                )}

            </div>

            {/* COLUNA DIREITA */}
            <div className="farm-layout">

                <h3>Layouts</h3>

                {layouts?.map((layout) => (
                    <span key={layout}>
                        {layout}
                    </span>
                ))}

                {mapDevice && (

                    <div className="map-device">

                        <strong>Map Device:</strong>

                        <span>
                            {mapDevice}
                        </span>

                    </div>

                )}

            </div>

        </div>

    );
}

export default FarmCard;