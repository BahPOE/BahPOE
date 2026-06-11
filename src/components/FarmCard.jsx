import "./FarmCard.css";

import Tag from "./general/Tag.jsx";

import ConsumableItem from "./ConsumableItem.jsx";

function FarmCard({ farm }) {

    const {
        title,
        variant,
        difficulty,
        buildType,
        description,
        atlasLink,
        consumables,
        layouts,
        mapDevice,
        image,
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

            {/* ÁREA VISUAL */}
            <div className="farm-details">

                {image && (

                    <div className="farm-card-background">

                        <img
                            src={image}
                            alt=""
                        />

                    </div>

                )}

                {/* COLUNA CENTRAL */}
                <div className="farm-scarabs">

                    <h3>Consumíveis</h3>

                    {consumables?.length > 0 ? (
                        consumables.map((consumable) => (
                            <ConsumableItem
                                key={consumable.name}
                                icon={consumable.icon}
                                name={consumable.name}
                                amount={consumable.amount}
                            />
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

                    <div className="farm-layout-list">

                        {layouts?.map((layout) => (

                            <span
                                key={layout.name}
                                className="farm-layout-item"
                            >
                                {layout.name}
                            </span>

                        ))}

                    </div>

                    {mapDevice && (

                        <div className="map-device">

                            <strong>Map Device:</strong>

                            <span className="map-device-item">
                                {mapDevice.name}
                            </span>

                        </div>

                    )}

                </div>

            </div>

        </div>

    );
}

export default FarmCard;