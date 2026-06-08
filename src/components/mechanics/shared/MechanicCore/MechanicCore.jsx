function MechanicCore({ title, items = [] }) {

    return (

        <section className="mechanic-core">

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

                        <h3>{item.title}</h3>

                        <p>{item.description}</p>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default MechanicCore;