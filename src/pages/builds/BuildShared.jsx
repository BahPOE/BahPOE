import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import Overlay from "../../components/layout/Overlay";
import MainContainer from "../../components/layout/MainContainer";
import BuildOverview from "../../components/builds/BuildOverview/BuildOverview";
import BuildStageSelector from "../../components/builds/BuildStageSelector/BuildStageSelector";
import BuildStageContent from "../../components/builds/BuildStageContent/BuildStageContent";

import "./BuildShared.css";

import { buildRegistry } from "../../data/builds/buildRegistry";
import { buildsData } from "../../data/builds/buildsData";
import { BUILD_STAGES } from "../../data/builds/stages";
import { campaignRecipePack } from "../../data/builds/campaignRecipePack";

function BuildShared() {

    const { slug } = useParams();

    const build = buildsData.find(
        (build) => build.slug === slug
    );

    const buildSystem = buildRegistry[slug];
    const contentMap = buildSystem?.content;

    const [activeStage, setActiveStage] = useState(
        BUILD_STAGES.campaign
    );

    const activeContent = contentMap?.[activeStage];

    const isCampaign = activeStage === BUILD_STAGES.campaign;

    if (!build || !contentMap) {
        return (
            <MainContainer>
                <h1>Build não encontrada</h1>
            </MainContainer>
        );
    }

    return (
        <div className="builds-layout">

            <Overlay theme="infernal" />

            <MainContainer>

                <div className="navigation-links">

                    <Link className="back-button" to="/">
                        Home
                    </Link>

                    <Link className="back-button" to="/builds">
                        Builds
                    </Link>

                    <Link className="back-button" to="/farms">
                        Farms
                    </Link>

                    <Link className="back-button" to="/mechanics">
                        Mecânicas
                    </Link>

                </div>

                <div className="build-overview-wrapper">
                    <BuildOverview build={build} />
                </div>

                <div className="build-stage-selector-wrapper">
                    <BuildStageSelector
                        activeStage={activeStage}
                        setActiveStage={setActiveStage}
                    />
                </div>

                <div className="build-content-wrapper">
                    <BuildStageContent content={activeContent} />
                </div>

                {isCampaign && (
                    <div className="recipes-wrapper">

                        <h2>Receitas Úteis da Campanha</h2>

                        <p className="recipes-subtitle">
                            Use apenas se não encontrar alternativas no loot ou na loja.
                        </p>

                        <BuildStageContent content={campaignRecipePack} />

                    </div>
                )}

            </MainContainer>

        </div>
    );
}

export default BuildShared;