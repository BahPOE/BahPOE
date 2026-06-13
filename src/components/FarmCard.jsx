import "./FarmCard.css";

import Tag from "./general/Tag.jsx";

import ConsumableItem from "./ConsumableItem.jsx";

import { useState, useRef } from "react";

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
        image,
        themeColor,
    } = farm;

    const [previewImage, setPreviewImage] = useState(null);

    const previewTimeoutRef = useRef(null);

    return (

        <div
            className="farm-card"
            style={{
                "--theme-color": themeColor
            }}
        >

            {/* COLUNA ESQUERDA */}
            <div className="farm-info">

                <h2 className="farm-title">
                    {title}
                </h2>

                <div className="farm-tag">

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
                    View Atlas Tree →
                </a>

            </div>

            {/* ÁREA VISUAL */}
            <div className="farm-details">

                {/* COLUNA CENTRAL */}
                <div className="farm-scarabs">

                    <h3>Consumíveis</h3>

                    {consumables?.length > 0 ? (

                        consumables.map((consumable) => (


                            <div

                                key={consumable.name}
                                onMouseEnter={() => {
                                    previewTimeoutRef.current = setTimeout(() => {
                                        setPreviewImage(consumable.hoverPreview)
                                    }, 400);
                                }}

                                onMouseLeave={() => {
                                    clearTimeout(previewTimeoutRef.current);
                                    setPreviewImage(null)
                                }}
                            >
                                <ConsumableItem

                                    icon={consumable.icon}
                                    name={consumable.name}
                                    amount={consumable.amount}
                                />

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

                </div>

            </div>

            {previewImage && (

                <div className="farm-preview-panel">

                    <img
                        src={previewImage}
                        alt=""
                    />
                </div>

            )}

        </div >

    );
}

export default FarmCard;