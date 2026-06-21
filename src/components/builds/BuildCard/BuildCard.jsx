import { Link } from "react-router-dom";

import "./BuildCard.css"

function BuildCard({ build }) {

    return (

        <Link
            to={`/builds/${build.slug}`}
            className="build-card"
            style={{
                backgroundImage: `url(${build.image})`
            }}
        >

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

            </div>

        </Link>

    );
}

export default BuildCard;