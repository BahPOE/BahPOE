function ContentCard({
    title,
    className = "",
    children,
}) {

    return (

        <div className={className}>

            {title && (
                <h3>{title}</h3>
            )}

            {children}

        </div>

    );
}

export default ContentCard;