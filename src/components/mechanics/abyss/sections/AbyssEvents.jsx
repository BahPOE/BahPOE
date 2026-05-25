import MechanicSection from "../../../layout/MechanicSection";
import InfoCard from "../InfoCard";

function AbyssEvents() {

    return (

        <MechanicSection title="Diferença entre os eventos">

            <p className="event-intro">
                Ambos os formatos da mecânica são excelentes,
                porém cada um possui um foco diferente.
            </p>

            <div className="event-grid">

                <InfoCard className="event-card">

                    <h3>Atlas Maps</h3>

                    <ul>

                        <li>
                            Maior foco em loot base
                        </li>

                        <li>
                            Boa para farmar xp
                        </li>

                        <li>
                            Mais rápido para encontros frequentes
                        </li>

                    </ul>

                </InfoCard>

                <InfoCard className="event-card">

                    <h3>Abyssal Depths</h3>

                    <ul>

                        <li>
                            Foco maior em loot's unicos
                        </li>

                        <li>
                            Aumenta o tempo de conclusão do mapa, porém compensa na quantidade de xp
                        </li>

                        <li>
                            Possibilidade de enfrentar bosses
                        </li>

                    </ul>

                </InfoCard>

            </div>

        </MechanicSection>

    );
}

export default AbyssEvents;