function MechanicOverview({ data }) {

    return (

        <section className="mechanic-section mechanic-overview">

            <h1>{data.title}</h1>

            <p className="mechanic-subtitle">
                {data.subtitle}
            </p>

            <p className="mechanic-summary">
                {data.summary}
            </p>

        </section>

    );
}

export default MechanicOverview;