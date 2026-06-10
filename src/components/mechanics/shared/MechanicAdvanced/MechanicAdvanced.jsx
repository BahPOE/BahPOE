import "./MechanicAdvanced.css";

function MechanicAdvanced({ title, tips = [] }) {

    return (

        <section className="mechanic-section mechanic-advanced">

            <h2>{title}</h2>

            {tips.map((tip) => (

                <div
                    key={tip.title}
                    className="mechanic-advanced-tip"
                >

                    <div className="mechanic-advanced-header">

                        <span className="mechanic-advanced-icon">
                            💡
                        </span>

                        <h3>{tip.title}</h3>

                    </div>

                    <p>{tip.description}</p>

                </div>

            ))}

        </section>

    );
}

export default MechanicAdvanced;