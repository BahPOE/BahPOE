import { Link } from "react-router-dom";

import Overlay from "../../components/layout/Overlay";
import MainContainer from "../../components/layout/MainContainer";

import MechanicOverview from "../../components/mechanics/shared/MechanicOverview/MechanicOverview";
import { expeditionOverview }
    from "../../data/expedition/expeditionOverviewData";

import MechanicIntroduction from
    "../../components/mechanics/shared/MechanicIntroduction/MechanicIntroduction";
import { expeditionIntroduction }
    from "../../data/expedition/expeditionMechanicIntroductionData";

import MechanicLoop from "../../components/mechanics/shared/MechanicLoop/MechanicLoop";
import { expeditionLoop }
    from "../../data/expedition/expeditionLoopData";

import MechanicCore from "../../components/mechanics/shared/MechanicCore/MechanicCore";
import { npcs } from "../../data/expedition/expeditionData";

function ExpeditionShared() {

    return (

        <div className="mechanic-page">

            <Overlay theme="templo" />

            <MainContainer>

                <Link
                    className="back-button"
                    to="/mechanics"
                >
                    Voltar para Mecânicas
                </Link>

                <MechanicOverview
                    data={expeditionOverview}
                />
                <MechanicIntroduction
                    data={expeditionIntroduction}
                />
                <MechanicLoop
                    steps={expeditionLoop}
                />
                <MechanicCore
                    title="NPCs da Expedition"
                    items={npcs}
                />

            </MainContainer>

        </div>

    );
}

export default ExpeditionShared;