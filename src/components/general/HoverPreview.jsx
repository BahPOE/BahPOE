import "./HoverPreview.css";

function HoverPreview({
    image,
    children,
}) {

    return (

        <div className="hover-preview">

            {children}

            {image && (

                <div className="hover-preview-content">

                    <img
                        src={image}
                        alt=""
                    />

                </div>

            )}

        </div>

    );
}

export default HoverPreview;