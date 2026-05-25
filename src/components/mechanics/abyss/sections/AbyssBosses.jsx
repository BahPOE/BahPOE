import BossCard from "../BossCard";
import { abyssBosses } from "../../../../data/abyss/abyssBossesData";

function AbyssBosses() {

    return (

        <section className="abyss-section">

            <h2>Bosses da Abyss</h2>

            {abyssBosses.map((boss) => (

                <BossCard
                    key={boss.name}
                    boss={boss}
                />

            ))}

        </section>

    );
}

export default AbyssBosses;