import "./ConsumableItem.css";

function ConsumableItem({
    icon,
    name,
    amount,
}) {

    return (

        <div className="consumable-item">

            <div className="consumable-info">

                <img
                    src={icon}
                    alt={name}
                    className="consumable-icon"
                />

                <span>{name}</span>

            </div>

            <span className="consumable-amount">

                {amount}x

            </span>

        </div>
    );
}

export default ConsumableItem;