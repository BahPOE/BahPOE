import MechanicSection from "../../../layout/MechanicSection";
import InfoCard from "../InfoCard";

function ExpeditionEvents() {

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
                            Maior foco em artefatos
                        </li>

                        <li>
                            Melhor para farmar Logbooks
                        </li>

                        <li>
                            Mais rápido para encontros frequentes
                        </li>

                    </ul>

                </InfoCard>

                <InfoCard className="event-card">

                    <h3>Logbooks</h3>

                    <ul>

                        <li>
                            Grande quantidade de artefatos
                        </li>

                        <li>
                            Muito foco em currency de refresh
                        </li>

                        <li>
                            Possibilidade de enfrentar bosses
                        </li>

                        <li>
                            Não dropa outros Logbooks
                        </li>

                    </ul>

                </InfoCard>

            </div>

        </MechanicSection>

    );
}

export default ExpeditionEvents;