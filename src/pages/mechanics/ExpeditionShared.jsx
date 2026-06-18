import { Link } from "react-router-dom";

import Overlay from "../../components/layout/Overlay";
import MainContainer from "../../components/layout/MainContainer";

import MechanicOverview from "../../components/mechanics/shared/MechanicOverview/MechanicOverview";
import { expeditionOverview }
    from "../../data/expedition/expeditionOverviewData";

import MechanicIntroduction from
    "../../components/mechanics/shared/MechanicIntroduction/MechanicIntroduction";
import { expeditionIntroduction }
    from "../../data/expedition/expeditionIntroductionData";

import MechanicLoop from "../../components/mechanics/shared/MechanicLoop/MechanicLoop";
import { expeditionLoop }
    from "../../data/expedition/expeditionLoopData";

import MechanicCore from "../../components/mechanics/shared/MechanicCore/MechanicCore";
import { expeditionCore } from "../../data/expedition/expeditionCoreData"

import MechanicNpcs from "../../components/mechanics/shared/MechanicNpcs/MechanicNpcs";
import { npcs } from "../../data/expedition/expeditionNpcData";

import MechanicBosses from "../../components/mechanics/shared/MechanicBosses/MechanicBosses"
import { expeditionBosses } from "../../data/expedition/expeditionBossesData";

import MechanicAdvanced from "../../components/mechanics/shared/MechanicAdvanced/MechanicAdvanced";
import { expeditionAdvanced } from "../../data/expedition/expeditionAdvanced";

import "../../components/mechanics/shared/MechanicShared.css";

function ExpeditionShared() {

    return (

        <div className="mechanic-page">

            <Overlay theme="templo" />

            <MainContainer>

                <div className="navigation-links">

                    <Link
                        className="back-button"
                        to="/"
                    >
                        Home
                    </Link>

                    <Link
                        className="back-button"
                        to="/mechanics"
                    >
                        Mecânicas
                    </Link>

                </div>

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
                    title="Elementos da Expedition"
                    items={expeditionCore[0].items}
                />

                <MechanicNpcs
                    title="NPCs da Expedition"
                    npcs={npcs}
                />

                <MechanicBosses
                    title="Chefes da Expedition"
                    bosses={expeditionBosses}
                />
                <MechanicAdvanced
                    title="Dicas Avançadas"
                    tips={expeditionAdvanced}
                />

            </MainContainer>

        </div>

    );
}

export default ExpeditionShared;