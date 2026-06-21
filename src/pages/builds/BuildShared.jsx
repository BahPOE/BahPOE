import { Link } from "react-router-dom";

import Overlay from "../../components/layout/Overlay";
import MainContainer from "../../components/layout/MainContainer";

import { useParams } from "react-router-dom"

import { buildsData } from "../../data/builds/buildsData";

import BuildOverview from "../../components/builds/BuildOverview/BuildOverview";

import BuildStageSelector from "../../components/builds/BuildStageSelector/BuildStageSelector";

import { useState } from "react";

import { BUILD_STAGES } from "../../data/builds/stages";

import BuildStageContent from "../../components/builds/BuildStageContent/BuildStageContent";

import "./BuildShared.css"

import {
    heavyStrikeCampaignData,
    heavyStrikeEarlyMapsData,
    heavyStrikeMidgameData,
    heavyStrikeEndgameData
} from "../../data/builds/heavyStrike";

function BuildShared() {

    const stageContentMap = {
        Campaign: heavyStrikeCampaignData,
        "Early Maps": heavyStrikeEarlyMapsData,
        Midgame: heavyStrikeMidgameData,
        Endgame: heavyStrikeEndgameData,
    };

    const [activeStage, setActiveStage] = useState(
        BUILD_STAGES.campaign
    );

    const activeContent = stageContentMap[activeStage];

    const { slug } = useParams();

    console.log(slug);

    const build = buildsData.find(

        (build) => build.slug === slug

    );

    if (!build) {

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

                    <Link
                        className="back-button"
                        to="/"
                    >
                        Home
                    </Link>

                    <Link
                        className="back-button"
                        to="/builds"
                    >
                        Builds
                    </Link>

                    <Link
                        className="back-button"
                        to="/farms"
                    >
                        Farms
                    </Link>

                    <Link
                        className="back-button"
                        to="/mechanics"
                    >
                        Mecânicas
                    </Link>

                </div>

                <div className="build-overview-wrapper">

                    <BuildOverview
                        build={build}
                    />

                </div>

                <div className="build-stage-selector-wrapper">

                    <BuildStageSelector
                        activeStage={activeStage}
                        setActiveStage={setActiveStage}
                    />

                </div>

                <div className="build-content-wrapper">

                    <BuildStageContent
                        content={activeContent}
                    />

                </div>

            </MainContainer >

        </div>

    )

};

export default BuildShared;