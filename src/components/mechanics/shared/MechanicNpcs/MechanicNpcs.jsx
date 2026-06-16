import "./MechanicNpcs.css";

function MechanicNpcs({ title, npcs }) {

    return (

        <section className="mechanic-section">

            <h2>{title}</h2>

            <div className="mechanic-npcs-grid">

                {npcs.map((npc) => (

                    <div
                        key={npc.title}
                        className="mechanic-npc-card"
                    >

                        <h3>{npc.title}</h3>

                        {npc.subtitle && (

                            <p className="npc-subtitle">
                                {npc.subtitle}
                            </p>

                        )}

                        <p>{npc.description}</p>

                    </div>

                ))}

            </div>

        </section>

    );
}

export default MechanicNpcs;