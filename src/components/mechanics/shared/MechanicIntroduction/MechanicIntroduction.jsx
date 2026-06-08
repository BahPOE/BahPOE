function MechanicIntroduction({ data }) {

    return (

        <section className="mechanic-introduction">

            <h2>O que é esta mecânica?</h2>

            {data.paragraphs.map((paragraph) => (

                <p key={paragraph}>
                    {paragraph}
                </p>

            ))}

        </section>
    );
}

export default MechanicIntroduction;