import InfoCard from "../InfoCard";
import { expeditionEnemies } from "../../../data/expedition/expeditionEnemiesData";
import MiniBossCard from "../MiniBossCard";
import { expeditionMiniBosses } from "../../../data/expedition/expeditionMiniBossesData";

function ExpeditionEnemies() {

    return (

        <>

            <section className="expedition-section">

                <h2>
                    Tipos de inimigos da Expedition
                </h2>

                {expeditionEnemies.map((card) => (

                    <InfoCard
                        key={card.title}
                        className={`enemy-card ${card.className || ""}`}
                    >

                        <h3>{card.title}</h3>

                        {card.paragraphs?.map((paragraph) => (

                            <p key={paragraph}>
                                {paragraph}
                            </p>

                        ))}

                        {card.items && (

                            <ul className="enemy-list">

                                {card.items.map((item) => (

                                    <li key={item.label}>

                                        <strong>
                                            {item.label}:
                                        </strong>

                                        {" "}
                                        {item.text}

                                    </li>

                                ))}

                            </ul>

                        )}

                        {card.dangerList && (

                            <ul className="danger-list">

                                {card.dangerList.map((danger) => (

                                    <li key={danger}>
                                        {danger}
                                    </li>

                                ))}

                            </ul>

                        )}

                    </InfoCard>

                ))}

            </section>

            <div className="boss-list">

                {expeditionMiniBosses.map((boss) => (

                    <MiniBossCard
                        key={boss.name}
                        boss={boss}
                    />

                ))}

            </div>

        </>

    );
}

export default ExpeditionEnemies;