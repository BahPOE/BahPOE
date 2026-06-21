import "./BuildStageContent.css";

import BuildSectionRenderer from "../BuildSectionRenderer/BuildSectionRenderer";

function BuildStageContent({ content }) {

    if (!content) return null;

    return (
        <div className="build-stage-content">

            <h2>{content.title}</h2>

            <p>{content.objective}</p>

            <div>
                {content.sections.map((section, index) => (
                    <BuildSectionRenderer
                        key={index}
                        section={section}
                    />
                ))}
            </div>

        </div>
    );
}

export default BuildStageContent;