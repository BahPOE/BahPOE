function MechanicRewards({ title, rewards }) {

    return (

        <section className="mechanic-section mechanic-rewards">

            <h2>{title}</h2>

            <div className="mechanic-rewards-grid">

                {rewards.map((reward) => (

                    <div
                        key={reward.title}
                        className="mechanic-reward-card"
                    >

                        {reward.icon && (

                            <img
                                src={reward.icon}
                                alt={reward.title}
                            />

                        )}

                        <h3>{reward.title}</h3>

                        <p>{reward.description}</p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default MechanicRewards;