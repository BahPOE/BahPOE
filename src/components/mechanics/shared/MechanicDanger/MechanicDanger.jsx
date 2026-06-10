function MechanicDanger({ title, dangers }) {

    return (

        <section className="mechanic-section mechanic-danger">

            <h2>{title}</h2>

            <ul className="danger-list">

                {dangers.map((danger) => (

                    <li key={danger}>
                        {danger}
                    </li>

                ))}

            </ul>

        </section>

    );

}

export default MechanicDanger;