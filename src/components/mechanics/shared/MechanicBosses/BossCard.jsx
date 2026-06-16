import BossInfoSection from "./BossInfoSection";

import "./BossCard.css";

import { useState } from "react";

function BossCard({ boss }) {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="boss-container">

            <div
                className="boss-header"
                onClick={() => setIsOpen(!isOpen)}
            >

                <img
                    src={boss.image}
                    alt={boss.name}
                    className="boss-image"
                />

                <div className="boss-header-info">

                    <div className="boss-title-row">

                        <h3>{boss.name}</h3>

                        <span className="boss-toggle">

                            {isOpen ? "▼" : "▶"}

                        </span>

                    </div>

                    <p className="boss-description">
                        {boss.subtitle}
                    </p>

                </div>

            </div>

            {isOpen && (

                <>

                    <div className="boss-grid">

                        {(boss.status || boss.drops?.length > 0) && (

                            <div className="boss-top-section">

                                <BossInfoSection title="Status">

                                    {boss.status && (

                                        <ul>

                                            <li>
                                                <strong>Dano</strong> - {boss.status.damage}
                                            </li>

                                            <li>
                                                <strong>Resistências</strong> - {boss.status.resistances}
                                            </li>

                                            <li>

                                                <strong>Modificadores Fixos</strong>

                                                <ul>

                                                    {boss.status.modifiers?.map((modifier) => (

                                                        <li key={modifier}>
                                                            {modifier}
                                                        </li>

                                                    ))}

                                                </ul>

                                            </li>

                                        </ul>

                                    )}

                                </BossInfoSection>

                                <BossInfoSection title="Drops">

                                    {boss.drops?.length > 0 && (

                                        <ul className="drops-list">

                                            {boss.drops.map((drop) => (

                                                <li
                                                    key={drop.name}
                                                    className="drop-item"
                                                >

                                                    <img
                                                        src={drop.icon}
                                                        alt={drop.name}
                                                        className="drop-icon"
                                                    />

                                                    <span>{drop.name}</span>

                                                    <div className="drop-preview">

                                                        <img
                                                            src={drop.preview}
                                                            alt={drop.name}
                                                        />

                                                    </div>

                                                </li>

                                            ))}

                                        </ul>

                                    )}

                                    {boss.dropsDescription && (

                                        <p>
                                            {boss.dropsDescription}
                                        </p>

                                    )}

                                </BossInfoSection>

                            </div>

                        )}

                        {boss.arena?.length > 0 && (

                            <BossInfoSection title="Arena">

                                <ul>

                                    {boss.arena.map((arenaItem) => (

                                        <li
                                            key={arenaItem.title}
                                            className="arena-item"
                                        >

                                            <h5>
                                                {arenaItem.title}
                                            </h5>

                                            <p>
                                                {arenaItem.description}
                                            </p>

                                        </li>

                                    ))}

                                </ul>

                            </BossInfoSection>

                        )}

                        {boss.skills?.length > 0 && (

                            <BossInfoSection
                                title="Habilidades"
                                className="boss-skills"
                            >

                                <ul>

                                    {boss.skills.map((skill) => (

                                        <li
                                            key={skill.name}
                                            className="skill-item"
                                        >

                                            <h5>
                                                {skill.name}
                                            </h5>

                                            <p>
                                                {skill.description}
                                            </p>

                                        </li>

                                    ))}

                                </ul>

                            </BossInfoSection>

                        )}

                    </div>


                </>

            )}

        </div>

    );
}

export default BossCard;