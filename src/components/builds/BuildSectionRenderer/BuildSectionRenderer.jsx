import "./BuildSectionRenderer.css";

function BuildSectionRenderer({ section }) {

    if (!section) {
        return null;
    }

    if (section.type === "text") {

        return (

            <div className="section section-text section-intro">

                <h3>{section.title}</h3>
                <p>{section.content}</p>

            </div>

        );
    }

    if (section.type === "list") {

        return (

            <div className="section section-list section-action">
                <h3>{section.title}</h3>

                <ul>
                    {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

        );

    }

    if (section.type === "note") {

        return (

            <div className="section section-note section-warning">

                <div className="build-note-header">

                    <span className="build-note-icon">⚠</span>
                    <h3>{section.title}</h3>

                </div>

                <p>{section.content}</p>
            </div>

        );

    }

    if (section.type === "recipe") {
        return (
            <div className="section-recipe">
                <h3>{section.title}</h3>

                <p>{section.problem}</p>

                <ul>
                    {section.inputs?.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <p>
                    <strong>Resultado:</strong> {section.output}
                </p>
            </div>
        );
    }

    return null;

}

export default BuildSectionRenderer;