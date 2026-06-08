function MechanicAdvanced({ title, tips }) {

    return (

        <section className="mechanic-advanced">

            <h2>{title}</h2>

            <div className="mechanic-advanced-grid">

                {tips.map((tip) => (

                    <div
                        key={tip.title}
                        className="mechanic-advanced-card"
                    >

                        <h3>{tip.title}</h3>

                        <p>{tip.description}</p>

                    </div>

                ))}

            </div>

        </section>

    );
}

export default MechanicAdvanced;