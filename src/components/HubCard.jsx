import "./HubCard.css";

function HubCard({ title, desc, icon }) {
    return (
        <div className="hub-card">
            <div className="hub-card-content">

                <img
                    src={icon}
                    alt={title}
                    className="hub-card-icon"
                />
                
                <div className="hub-card-title">{title}</div>

                <div className="hub-card-desc">{desc}</div>
            </div>
        </div>
    );
}

export default HubCard;