import { Link } from "react-router-dom";

import Overlay from "../../components/layout/Overlay";
import MainContainer from "../../components/layout/MainContainer";

import { useParams } from "react-router-dom"

import { buildsData } from "../../data/builds/buildsData";

import BuildOverview from "../../components/builds/shared/BuildOverview";

import BuildStageSelector from "../../components/builds/BuildStageSelector/BuildStageSelector";

function BuildShared() {

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

        <div className="mechanic-page">

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

                <BuildOverview
                    build={build}
                />

                <BuildStageSelector />

            </MainContainer>

        </div>

    )

};

export default BuildShared;