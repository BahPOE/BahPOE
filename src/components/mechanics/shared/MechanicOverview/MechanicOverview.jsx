function MechanicOverview({ data }) {

    return (

        <section>

            <h1>{data.title}</h1>

            <p>{data.subtitle}</p>

            <p>{data.summary}</p>

        </section>
    );
}

export default MechanicOverview;