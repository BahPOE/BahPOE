import LoopCard from "../LoopCard";
import NpcCard from "../NpcCard";
import InfoCard from "../InfoCard";
import MechanicSection from "../../layout/MechanicSection";

import {
    npcs,
    expeditionLoop,
} from "../../../data/expedition/expeditionData";

function ExpeditionGroups() {

    return (

        <MechanicSection title="Grupos">

            <h2>Grupos de Exploração</h2>

            <p className="group-intro">
                Cada NPC pertence a um grupo de exploração diferente
                e possui mecânicas próprias de loja e interação.
            </p>

            <p className="group-intro">
                Para negociar com eles,
                você precisa obter artefatos específicos daquele grupo.
            </p>

            <div className="npc-grid">

                {npcs.map((npc) => (

                    <NpcCard
                        key={npc.title}
                        title={npc.title}
                        description={npc.description}
                    />

                ))}

            </div>

            <div className="mechanic-loop-section">

                <h3>Loop da Mecânica</h3>

                <p className="loop-description">
                    O ciclo principal da Expedition é simples:
                </p>

                <div className="loop-grid">

                    {expeditionLoop.map((step) => (

                        <LoopCard
                            key={step}
                            text={step}
                        />

                    ))}

                </div>

            </div>

            <p className="group-conclusion">
                Apesar de parecer complexo no início,
                o fluxo das lojas é rápido de aprender
                e fica natural depois de algumas interações.
            </p>

        </MechanicSection>

    );
}

export default ExpeditionGroups;