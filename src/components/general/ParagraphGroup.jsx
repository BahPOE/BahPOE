function ParagraphGroup({ paragraphs }) {

    return (

        <>

            {paragraphs.map((paragraph) => (

                <p key={paragraph}>
                    {paragraph}
                </p>

            ))}

        </>

    );
}

export default ParagraphGroup;