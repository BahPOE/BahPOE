import BossInfoSection from "./BossInfoSection";

function BossCard({ boss }) {
    return (

        <div className="boss-container">

            <div className="boss-header">

                <img
                    src={boss.image}
                    alt={boss.name}
                    className="boss-image"
                />

                <div className="boss-header-info">

                    <h3>{boss.name}</h3>

                    <p className="boss-description">
                        {boss.subtitle}
                    </p>

                </div>

            </div>

            <div className="boss-grid">

                <BossInfoSection title="Status e Drops">

                    <ul>

                        <li>
                            <strong>Dano</strong> - {boss.status.damage}
                        </li>

                        <li>
                            <strong>Resistências</strong> - {boss.status.resistances}
                        </li>

                        <li>

                            <strong>Modificadores Fixos</strong>

                            {boss.status.modifiers.map((modifier) => (

                                <p key={modifier}>
                                    {modifier}
                                </p>

                            ))}

                        </li>

                    </ul>

                    <h4>Drops Únicos</h4>

                    <ul>

                        <div className="drops-list">

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

                        </div>

                    </ul>

                    <p>
                        {boss.dropsDescription}
                    </p>

                </BossInfoSection>

                <BossInfoSection title="Arena">

                    <ul>

                        {boss.arena.map((arenaItem) => (

                            <li key={arenaItem.title}>

                                <strong>
                                    {arenaItem.title}:
                                </strong>

                                {" "}
                                {arenaItem.description}

                            </li>

                        ))}

                    </ul>

                </BossInfoSection>

            </div>

            <BossInfoSection
                title="Habilidades"
                className="boss-skills"
            >

                <ul>

                    {boss.skills.map((skill) => (

                        <li key={skill.name}>

                            <strong>
                                {skill.name}:
                            </strong>

                            {" "}
                            {skill.description}

                        </li>

                    ))}

                </ul>

            </BossInfoSection>

        </div>

    );
}

export default BossCard;