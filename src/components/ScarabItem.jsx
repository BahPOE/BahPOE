import "./ScarabItem.css";

function ScarabItem({
    icon,
    name,
    amount,
}) {

    return (

        <div className="scarab-item">

            <div className="scarab-info">

                <img
                    src={icon}
                    alt={name}
                    className="scarab-icon"
                />

                <span>{name}</span>

            </div>

            <span className="scarab-amount">

                {amount}x

            </span>

        </div>
    );
}

export default ScarabItem;