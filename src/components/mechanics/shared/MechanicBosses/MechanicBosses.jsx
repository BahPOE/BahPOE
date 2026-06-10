import BossCard from "./BossCard";

function MechanicBosses({ title, bosses }) {

    if (!bosses?.length) {

        return (

            <section>

                <h2>{title}</h2>

                <p>
                    Esta mecânica não possui bosses próprios.
                </p>

            </section>

        );

    }

    return (

        <section>

            <h2>{title}</h2>

            {bosses.map((boss) => (

                <BossCard
                    key={boss.name}
                    boss={boss}
                />

            ))}

        </section>

    );

}

export default MechanicBosses;