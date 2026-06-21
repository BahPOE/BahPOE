function BuildSectionRenderer({ section }) {

    if (!section) {
        return null;
    }

    if (section.type === "text") {
        return (
            <div className="section-text">
                <h3>{section.title}</h3>
                <p>{section.content}</p>
            </div>
        );
    }

    return null;
}

export default BuildSectionRenderer;