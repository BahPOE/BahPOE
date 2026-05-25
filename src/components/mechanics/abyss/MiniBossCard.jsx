function MiniBossCard({ boss }) {

    return (

        <div className="boss-card">

            <h3>{boss.name}</h3>

            <p>{boss.faction}</p>

            <span>{boss.areaLevel}</span>

        </div>

    );
}

export default MiniBossCard;