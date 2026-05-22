import MechanicSection from "../../../layout/MechanicSection";
import InfoCard from "../InfoCard";

function ExpeditionLogbooks() {

    return (

        <MechanicSection title="Logbooks">

            <InfoCard className="logbook-card">

                <h3>O que são Logbooks?</h3>

                <p>
                    Além dos encontros nos mapas,
                    existe também a versão dedicada da mecânica:
                    os Logbooks.
                </p>

            </InfoCard>

            <InfoCard className="logbook-card">

                <h3>Como funciona</h3>

                <p>
                    Para acessar um Logbook,
                    fale com Danning e selecione a área desejada.
                </p>

                <p>
                    O mapa inteiro será focado em Expedition,
                    com muito mais explosivos disponíveis.
                </p>

                <p>
                    Os monstros encontrados no final das rotas
                    podem ficar extremamente fortes,
                    então planeje bem suas explosões.
                </p>

            </InfoCard>

            <InfoCard className="logbook-card">

                <h3>Elementos especiais</h3>

                <ul className="logbook-list">

                    <li>
                        Barreiras destrutíveis
                    </li>

                    <li>
                        Cavernas subterrâneas
                    </li>

                    <li>
                        Arenas de Boss
                    </li>

                    <li>
                        Shrines
                    </li>

                </ul>

                <p>
                    Tudo relacionado à mecânica
                    precisa passar pela área de explosão.
                    Esse é o trigger principal da Expedition.
                </p>

            </InfoCard>

        </MechanicSection>

    );
}

export default ExpeditionLogbooks;