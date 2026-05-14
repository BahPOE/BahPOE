import { Link } from "react-router-dom";
import "./MechanicsCard.css";

function MechanicsCard({
    title,
    description,
    image,
    link
}) {
    return (

        <Link
            to={link}
            className="mechanic-card"
        >

            <img
                src={image}
                alt={title}
                className="mechanic-image"
            />

            <div className="mechanic-info">

                <h2>{title}</h2>

                <p>{description}</p>

            </div>

        </Link>
    );
}

export default MechanicsCard;