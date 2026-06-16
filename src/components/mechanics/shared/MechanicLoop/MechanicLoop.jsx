import "./MechanicLoop.css";

function MechanicLoop({ steps }) {

    return (

        <section className="mechanic-section mechanic-loop">

            <h2>Como Funciona</h2>

            <div className="mechanic-loop-container">

                {steps.map((step, index) => (

                    <div
                        key={step}
                        className="mechanic-loop-wrapper"
                    >

                        <div className="mechanic-loop-step">

                            <div className="mechanic-loop-number">
                                {index + 1}
                            </div>

                            <p>{step}</p>

                        </div>

                        {index < steps.length - 1 && (

                            <span className="mechanic-loop-arrow">
                                →
                            </span>

                        )}

                    </div>

                ))}

            </div>

        </section>

    );
}

export default MechanicLoop;