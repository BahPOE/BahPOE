import { expeditionEnemies } from "../../../../data/expedition/expeditionEnemiesData";
import MiniBossCard from "../MiniBossCard";
import { expeditionMiniBosses } from "../../../../data/expedition/expeditionMiniBossesData";

import MechanicSection from "../../../layout/MechanicSection";
import ContentCard from "../../../general/ContentCard";
import InfoList from "../../../general/InfoList";
import ParagraphGroup from "../../../general/ParagraphGroup";

function ExpeditionEnemies() {

    return (

        <>

            <MechanicSection title="Tipos de inimigos da Expedition">

                {expeditionEnemies.map((card) => (

                    <ContentCard
                        key={card.title}
                        title={card.title}
                        className={`info-card enemy-card ${card.className || ""}`}
                    >


                        {card.paragraphs && (

                            <ParagraphGroup
                                paragraphs={card.paragraphs}
                            />

                        )}

                        {card.items && (

                            <InfoList
                                items={card.items}
                                className="enemy-list"
                            />

                        )}

                        {card.dangerList && (

                            <InfoList
                                items={card.dangerList}
                                className="danger-list"
                            />

                        )}

                    </ContentCard>

                ))}

            </MechanicSection>

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