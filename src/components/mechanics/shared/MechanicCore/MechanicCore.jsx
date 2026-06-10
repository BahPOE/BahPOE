import "./MechanicCore.css";

function MechanicCore({ title, items = [] }) {

    return (

        <section className="mechanic-section mechanic-core">

            <h2>{title}</h2>

            <div className="mechanic-core-grid">

                {items.map((item) => (

                    <div key={item.title} className="mechanic-core-card">

                        {item.icon && (
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="mechanic-core-icon"
                            />
                        )}

                        <div className="mechanic-core-header">

                            <h3>{item.title}</h3>

                            {item.subtitle && (

                                <p className="mechanic-core-subtitle">
                                    {item.subtitle}
                                </p>

                            )}

                        </div>

                        <p>{item.description}</p>

                    </div>

                ))}

            </div>

        </section>

    );
}

export default MechanicCore;