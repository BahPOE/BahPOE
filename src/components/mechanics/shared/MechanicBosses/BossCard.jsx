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

                {(boss.status || boss.drops?.length > 0) && (

                    <BossInfoSection title="Status e Drops">

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

                        {boss.drops?.length > 0 && (

                            <>

                                <h4>Drops Únicos</h4>

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

                            </>

                        )}

                        {boss.dropsDescription && (

                            <p>
                                {boss.dropsDescription}
                            </p>

                        )}

                    </BossInfoSection>

                )}

                {boss.arena?.length > 0 && (

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

                )}

            </div>

            {boss.skills?.length > 0 && (

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

            )}

        </div>

    );
}

export default BossCard;