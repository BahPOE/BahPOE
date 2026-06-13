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

                <span className="consumable-name">

                    {name}

                </span>

            </div>

            <span className="consumable-amount">

                {amount}x

            </span>

        </div>
    );
}

export default ConsumableItem;