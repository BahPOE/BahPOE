function InfoList({
    items,
    className = "",
}) {

    return (

        <ul className={className}>

            {items.map((item) => (

                <li key={item.label || item}>

                    {item.label ? (
                        <>
                            <strong>{item.label}:</strong>
                            {" "}
                            {item.text}
                        </>
                    ) : (
                        item
                    )}

                </li>

            ))}

        </ul>

    );
}

export default InfoList;