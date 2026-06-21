import "./BuildOverview.css";

function BuildOverview({ build }) {

    return (

        <section className="build-overview">

            <div className="build-overview-header">

                <h1>
                    {build.buildName}
                </h1>

                <p className="build-overview-ascendancy">
                    {build.ascendancy}
                </p>

            </div>

            <div className="build-overview-ratings">

                <p>

                    <span>Mapper</span>

                    <span className="build-stars">

                        {"★".repeat(build.mapper)}

                        {"☆".repeat(5 - build.mapper)}

                    </span>

                </p>

                <p>

                    <span>Bosser</span>

                    <span className="build-stars">

                        {"★".repeat(build.bosser)}

                        {"☆".repeat(5 - build.bosser)}

                    </span>

                </p>

            </div>

            <div className="build-overview-tags">

                <span
                    className={`build-tag build-tag-${build.stage.toLowerCase()}`}
                >
                    {build.stage}
                </span>

                <span
                    className={`build-tag build-tag-${build.budget.toLowerCase()}`}
                >
                    {build.budget} Budget
                </span>

                <span className="build-tag build-tag-patch">
                    Patch {build.patch}
                </span>

            </div>

            <a
                href={build.pob}
                target="_blank"
                rel="noreferrer"
                className="build-pob-button"
            >
                Abrir Path of Building
            </a>

        </section>

    );

}

export default BuildOverview;