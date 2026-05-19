import BossCard from "../BossCard";
import { expeditionBosses } from "../../../data/expedition/expeditionBossesData";

function ExpeditionBosses() {

    return (

        <section className="expedition-section">

            <h2>Bosses da Expedition</h2>

            {expeditionBosses.map((boss) => (

                <BossCard
                    key={boss.name}
                    boss={boss}
                />

            ))}

        </section>

    );
}

export default ExpeditionBosses;