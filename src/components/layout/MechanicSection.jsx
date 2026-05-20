function MechanicSection({ title, children }) {

    return (

        <section className="expedition-section">

            <h2>{title}</h2>

            {children}

        </section>

    );
}

export default MechanicSection;