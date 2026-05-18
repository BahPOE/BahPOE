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

                <div className="boss-info-card">

                    <div className="card-section">

                        <div className="card-header">

                            <div className="card-title">

                                <h4>Status</h4>

                            </div>

                        </div>

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

                    </div>

                    <div className="card-section">

                        <div className="card-header">

                            <div className="card-title">

                                <h4>Drops Únicos</h4>

                            </div>

                        </div>

                        <ul>

                            {boss.drops.map((drop) => (

                                <li key={drop}>
                                    {drop}
                                </li>

                            ))}

                        </ul>

                        <p>
                            {boss.dropsDescription}
                        </p>

                    </div>

                </div>

                <div className="boss-info-card">

                    <div className="card-title">

                        <h4>Arena</h4>

                    </div>

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

                </div>

                <div className="boss-info-card boss-skills">

                    <div className="card-title">

                        <h4>Habilidades</h4>

                    </div>

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

                </div>

            </div>

        </div>

    );
}

export default BossCard;