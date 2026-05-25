import LoopCard from "../LoopCard";
import NpcCard from "../NpcCard";
import InfoCard from "../InfoCard";
import MechanicSection from "../../../layout/MechanicSection";

import {
    abyssLoop,
} from "../../../../data/abyss/abyssData";

function AbyssGroups() {

    return (

        <MechanicSection title="Loop da Mecânica">

            <div className="mechanic-loop-section">

                <p className="loop-description">
                    O ciclo principal da Abyss é simples:
                </p>

                <div className="loop-grid">

                    {abyssLoop.map((step) => (

                        <LoopCard
                            key={step}
                            text={step}
                        />

                    ))}

                </div>

            </div>

            <p className="group-conclusion">
                É uma mecânica que recompensa muito velocidade e clear speed,
                caso foque nas Dephts,
                ter um pouco de single target é importante.
            </p>

        </MechanicSection>

    );
}

export default AbyssGroups;