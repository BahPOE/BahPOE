import "./BuildCard.css"

function BuildCard({ build }) {

    return (

        <div className="build-card">

            <div className="build-card-image">

                <img
                    src={build.image}
                    alt={build.ascendancy}
                />

            </div>

            <div className="build-card-content">

                <h3>
                    {build.buildName}
                </h3>

                <p className="build-ascendancy">
                    {build.ascendancy}
                </p>

                <div className="build-ratings">

                    <p>

                        <span className="rating-label">

                            Mapper

                        </span>

                        <span className="build-stars">

                            {"★".repeat(build.mapper)}

                            {"☆".repeat(5 - build.mapper)}

                        </span>

                    </p>

                    <p>

                        <span className="rating-label">

                            Bosser

                        </span>

                        <span className="build-stars">

                            {"★".repeat(build.bosser)}

                            {"☆".repeat(5 - build.bosser)}

                        </span>

                    </p>

                </div>

                <div className="build-tags">

                    <span>{build.stage}</span>

                    <span>{build.budget} Budget</span>

                    <span>Patch {build.patch}</span>

                </div>

            </div>

        </div>

    );
}

export default BuildCard;