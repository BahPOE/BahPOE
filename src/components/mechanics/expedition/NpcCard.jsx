function NpcCard(props) {

    return (

        <div className="npc-card">

            <h3>{props.title}</h3>

            <p>{props.description}</p>
            
        </div>
    );
}

export default NpcCard;