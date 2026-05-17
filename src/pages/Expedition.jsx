import { Link } from "react-router-dom";

import Overlay from "../components/Overlay";
import MainContainer from "../components/MainContainer";
import NpcCard from "../components/expedition/NpcCard";
import LoopCard from "../components/expedition/LoopCard";
import InfoCard from "../components/expedition/InfoCard";
import { npcs, expeditionLoop } from "../data/expeditionData";

import "./Expedition.css";

function Expedition() {

    return (

        <div className="expedition-page">

            <Overlay theme="selva" />

            <div className="expedition-content">

                <MainContainer>

                    <Link
                        className="back-button"
                        to="/mechanics"
                    >
                        Voltar para Mecânicas
                    </Link>

                    {/* HEAD */}
                    <section className="expedition-main">

                        <h1 className="expedition-title">
                            Expedition
                        </h1>

                        <p className="expedition-subtitle">
                            Explosivos, Artefatos, Lojas com NPC e Logbook's
                        </p>

                    </section>

                    {/* INTRODUÇÃO */}

                    <section className="expedition-section">

                        <h2>O que é Expedition?</h2>

                        <p>
                            A Expedition ( Expedição ) é um evento no qual algum dos 4 NPC's de Exploração vão aparecer e lhe pedir para colocar algumas bombas, ao terminar de colocar elas você vai utilizar o detonador e assim tudo o que você selecionou vai surgir revelando monstros e baús.
                        </p>

                        <p>
                            Os modificadores são herdados pelas
                            explosões seguintes, tanto os positivos quanto os negativos.
                        </p>

                    </section>

                    {/* GRUPOS */}

                    <section className="expedition-section">

                        <h2>Grupos de Exploração</h2>

                        <p>
                            Os NPC's pertencem a 4 Grupos e possuem opções especiais únicas de cada um, para utilizar a sua loja você precisa de artefatos daquele Grupo.
                        </p>

                        <div className="npc-grid">

                            {npcs.map((npc) => (

                                <NpcCard
                                    key={npc.title}
                                    title={npc.title}
                                    description={npc.description}
                                />

                            ))}

                        </div>

                        <h3>Loop da Mecânica</h3>

                        <div className="loop-grid">

                            {expeditionLoop.map((step) => (

                                <LoopCard
                                    key={step}
                                    text={step}
                                />
                            ))}

                        </div>

                        <p>
                            O uso das lojas também é simples e rápido,
                            e com poucos minutos você já vai
                            entender o fluxo de todos os NPC's.
                        </p>

                    </section>

                    {/* LOGBOOK */}

                    <section className="expedition-section">

                        <h2>Logbook's</h2>

                        <InfoCard className="logbook-card">
                            Além dos encontros nos mapas, também existe a versão dedicada desse evento, o chamado Logbook.
                        </InfoCard>

                        <InfoCard className="logbook-card">
                            Nele você vai precisar ir até o Danning, escolher a opção de abrir o Logbook e então escolher para qual area você vai partir, chegando lá o mapa inteiro vai ser somente sobre Expedition, o número de bombas a sua disposição vai ser maior que o normal já que o mapa todo é sobre exploração, aqui os monstros no final do evento vão ser bem fortes então tome cuidado.
                        </InfoCard>

                        <InfoCard className="logbook-card">
                            Dentro dos Logbooks temos algumas areas especiais, como barreiras físicas que precisam ser explodidas por uma bomba para lhe dar acesso, cavernas subterrâneas, arenas de boss e buffs, tudo que envolve expedition precisa passar pela area de explosão, esse é o trigger da mecânica.
                        </InfoCard>

                    </section>

                    {/* DIFERENÇAS ENTRE OS EVENTOS */}

                    <section className="expedition-section">

                        <h2>Diferença entre os eventos</h2>

                        <InfoCard className="event-card">
                            Ambos os eventos são excelentes porém cada um tem foco diferente
                        </InfoCard>

                        <InfoCard className="event-card">
                            Encontros nos mapas normais do Atlas são mais voltados para artefatos e drop de logbooks, enquanto isso os logbook's também dropam muitos artefatos porém o foco maior de drop aqui são as moedas de roletar das lojas, além do bonus que é enfrentar o boss daquele Grupo
                        </InfoCard>

                        <InfoCard className="event-card">
                            Vale avisar também que dentro de um logbook você não pode dropar outro logbook
                        </InfoCard>

                    </section>

                    {/* TIPOS DE INIMIGOS */}

                    <section className="expedition-section">

                        <h2>Agora vamos falar sobre os tipos de inimigos que temos nessa mecânica</h2>

                        <InfoCard className="enemy-card">
                            Caveiras pequenas - Monstros normais com os modificadores do evento
                            Caveiras Maiores - Runic Monsters, esses dropam Artefatos, Itens para dar Refresh na loja e Logbook's
                            Baús - A bandeira indica qual o tipo de baú que vai aparecer, a cor da bandeira indica o valor do seu conteúdo sendo Branca - Menor  Amarela - Media  Vermelha - Grande
                        </InfoCard>

                        <InfoCard className="enemy-card">
                            Essas três categorias são extremamente importantes para melhorar a sua eficiência e direcionamento ao posicionar as bombas, pois existem modificadores dedicados a algo especifico. Exemplo: Runic Monsters tem 40% a mais de quantity
                            Lembrando que essa é uma mecânica de herança, para se ter um melhor resultado imagine ter 3 modificadores desses na sua linha de detonação, isso significa um aumento bonus de 120% na quantity de drop dos monstros Rúnicos, ou seja, mais artefatos, mais itens para dar refresh na loja e mais drops de logbook's
                        </InfoCard>

                        <InfoCard className="enemy-card">
                            Porém nem tudo é positivo, quanto mais recompensas mais difícil o conteúdo fica, e é bem fácil "brickar" um mapa pegando modificadores que deixam os monstros imortais

                            * Imunidade a algum tipo de dano
                            * Acumular chance de block e deixar os monstros com 100%
                            * Stackar Regen e deixar eles imortais pois recuperam vida mais rápido do que você tira
                        </InfoCard>

                        <InfoCard className="enemy-card">
                            Então antes de colocar as bombas pensando somente no positivo, tenha em mente quais modificadores negativos você já pegou e quais a sua build faz, uma build que se baseia em leech não pode pegar um modificador que impede os monstros de serem leechados e assim por diante.
                        </InfoCard>

                        <h2>Além dos monstros padrões que aparecem no evento, temos 4 Boss que são encontrados somente em Logbook's e são possíveis de serem encontrados 1 a cada 5 areas.
                        </h2>

                        <div className="boss-card">
                            <h3>Danning ( Knights of the Sun ) - Olroth, Origin of the Fall (Areas de level 81+)</h3>
                        </div>

                        <div className="boss-card">
                            <h3>Gwennen (Druids of the Broken Circle) - Medved, Feller of Heroes (Areas de level 68+)</h3>
                        </div>

                        <div className="boss-card">
                            <h3>Rog (Order of the Chalice) - Uhtred, Covetous Traitor (Areas de level 75+)</h3>
                        </div>

                        <div className="boss-card">
                            <h3>Tujen (Black Scythe Mercenaries) - Vorana, Last to Fall (Areas de level 68+)</h3>
                        </div>

                        <p>
                            Cada um neles tem uma historia com o seu respectivo Grupo, é uma historia de fundo interessante e pode ser acompanhada por documentos achados durante o evento e pelas opções de conversa com o próprio NPC.
                        </p>

                    </section>

                    {/* BOSS */}

                    <section className="expedition-section">

                        <div>

                            <h2>Bosses da Expedition</h2>

                            <div className="boss-container">

                                <div className="boss-header">

                                    <img
                                        src=""
                                        alt=""
                                        className="boss-image"
                                    />

                                    <div className="boss-header-info">

                                        <h3>Olroth</h3>

                                        <p className="boss-description">
                                            Boss ligado ao Danning
                                        </p>

                                    </div>

                                </div>

                                <div className="boss-grid">

                                    <div className="boss-info-card">

                                        <div className="card-section">

                                            <div className="card-header">

                                                <h4>Status</h4>

                                            </div>

                                            <ul>

                                                <li>
                                                    <strong>Dano</strong> - Fogo e Fisico
                                                </li>

                                                <li>
                                                    <strong>Resistencias</strong> - 50% de todas elementais e 30% de chaos
                                                </li>

                                                <li>
                                                    <strong>Modificadores Fixos</strong>

                                                    <p>Ganha Ward base igual a 5% de sua Vida Máxima(Maximum Life)</p>

                                                    <p>Não tem Escudo de Energia(Energy Shield)</p>

                                                    <p>Não pode ser totalmente desacelerado</p>

                                                    <p>Imune a knockback</p>

                                                </li>

                                            </ul>

                                        </div>

                                        <div className="card-section">

                                            <div className="card-header">

                                                <h4>Drops Unicos</h4>

                                            </div>

                                            <ul>

                                                <li>
                                                    Olroth's Resolve
                                                </li>

                                                <li>
                                                    Cadigan's Crown
                                                </li>

                                                <li>
                                                    Vorana's March
                                                </li>

                                                <li>
                                                    Olroth's Charge
                                                </li>

                                            </ul>

                                            <p>
                                                Além disso, ao derrotar Olroth vai aparecer um Altar para adquirir ou trocar outra Bloodline para a Bloodline dele.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="boss-info-card">

                                        <h4>Arena</h4>

                                        <ul>

                                            <li>
                                                <strong>Chama Exterminadora:</strong> A chama gira pela arena disparando um laser que persegue o jogador.
                                                Ela para durante a fase de invulnerabilidade.
                                                De vez em quando, solta um feixe que deixa uma linha de fogo no chão por um tempo.
                                            </li>

                                            <li>
                                                <strong>Portais Rúnicos:</strong> Portais que invocam inimigos extras.
                                                Aparece um em cada fase de invulnerabilidade e você precisa usar explosivos para detonar o portal e pará-los.
                                            </li>

                                            <li>
                                                <strong>Estrelas de Cristal:</strong> Cristais que emitem um Righteous Fire(aura que causa dano de fogo contínuo) e Blind(cegueira) em quem estiver perto.
                                                Surge um em cada fase de invulnerabilidade e também pode ser desativado com explosivos.
                                            </li>

                                        </ul>

                                    </div>

                                    <div className="boss-info-card boss-skills">

                                        <h4>Habilidades</h4>

                                        <ul>

                                            <li>
                                                <strong>Investida:</strong> Ele avança rápido e manda um corte em semicírculo ou uma estocada. Se te pegar, você fica Maim(mutilado).
                                            </li>

                                            <li>
                                                <strong>Arremesso de Espada:</strong> Ele lança a espada, ela gira em linha reta e volta para a mão dele, causando Bleeding(sangramento).
                                            </li>

                                            <li>
                                                <strong>Cleave:</strong> Uma sequência de ataques convertidos em dano de fogo.
                                            </li>

                                            <li>
                                                <strong>Gaiola de Luz:</strong> Um círculo com 6 feixes de luz que se fecha na sua posição e depois expande, causando dano em anel.
                                                Ele avisa quando vai soltar esse ataque: Purify!(Purificar!)
                                            </li>

                                            <li>
                                                <strong>Pancada no Chão:</strong> Ele carrega um golpe e soca o chão com tudo, ignorando metade da sua chance de bloqueio e esquiva. Deixa uma área que aplica o debuff Enervation(Enervação) isso reduz a velocidade de movimento e impede a recuperação de vida e escudo.
                                                Ele avisa quando vai soltar esse ataque: Wasteland!(Terra desolada!)
                                            </li>

                                            <li>
                                                <strong>Invulnerabilidade:</strong> Quando a vida dele chega a zero, ressuscita com vida cheia e fica invulnerável.
                                                Ele só volta a tomar dano depois que você detonar um Portal Rúnico ou uma Estrela de Cristal.
                                                Isso acontece duas vezes na luta.
                                            </li>

                                        </ul>

                                    </div>

                                </div>

                            </div>

                            <div className="boss-container">

                                <div className="boss-header">

                                    <img
                                        src=""
                                        alt=""
                                        className="boss-image"
                                    />

                                    <div className="boss-header-info">

                                        <h3>Medved</h3>

                                        <p className="boss-description">
                                            Boss ligado a Gwennen.
                                        </p>

                                    </div>
                                </div>

                                <div className="boss-grid">

                                    <div className="boss-info-card">

                                        <div className="card-section">

                                            <div className="card-header">

                                                <h4>Status</h4>

                                            </div>

                                            <ul>

                                                <li>
                                                    <strong>Dano</strong> - Fisico
                                                </li>

                                                <li>
                                                    <strong>Resistencias</strong> - 50% de todas elementais e 30% de chaos
                                                </li>

                                                <li>
                                                    <strong>Modificadores Fixos</strong>

                                                    <p>Ganha Ward base igual a 5% de sua Vida Máxima(Maximum Life)</p>

                                                    <p>Não tem Escudo de Energia(Energy Shield)</p>

                                                </li>

                                            </ul>
                                        </div>

                                        <div className="card-section">

                                            <div className="card-header">

                                                <h4>Drops Unicos</h4>

                                            </div>

                                            <ul>

                                                <li>
                                                    Elixir of the Unbroken Circle
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    <div className="boss-info-card">

                                        <h4>Arena</h4>

                                        <p>Não tem, aparece no mesmo mapa padrão que o resto dos Remnants</p>

                                    </div>

                                    <div className="boss-info-card boss-skills">

                                        <h4>Habilidades</h4>

                                        <ul>

                                            <li>
                                                <strong>Salto Esmagador:</strong> Pula alto e cai com tudo no chão, causando dano em área no impacto.
                                            </li>

                                            <li>
                                                <strong>Cleave:</strong> Um golpe com um dos machados, feito em um ângulo meio enviesado bem na sua frente.
                                            </li>

                                            <li>
                                                <strong>Ataque Combo:</strong> Avança em linha reta dando um golpe com cada machado e termina atacando com as duas armas ao mesmo tempo.</li>

                                            <li>
                                                <strong>Arremesso de Rocha:</strong> Se atira para frente enquanto lança uma pedra em linha reta.
                                            </li>

                                            <li>
                                                <strong>Invocar Cultista:</strong> Quando a vida dele chega em 75%, 50% e 25%, ele chama ajudantes que se conectam a ele (tether).
                                                Ele avisa quando vai soltar esse ataque: Aid me!(Me ajudem!)
                                            </li>

                                            <li>
                                                <strong>Invocar Aranha:</strong> Invoca várias aranhas fraquinhas para te cercar.
                                                Ele avisa quando vai soltar esse ataque: Swarm!(Enxame!)
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="boss-container">

                            <div className="boss-header">

                                <img
                                    src=""
                                    alt=""
                                    className="boss-image"
                                />

                                <div className="boss-header-info">

                                    <h3>Uhtred</h3>

                                    <p className="boss-description">
                                        Boss ligado ao Rog.
                                    </p>

                                </div>
                            </div>

                            <div className="boss-grid">

                                <div className="boss-info-card">

                                    <div className="card-section">

                                        <div className="card-header">

                                            <h4>Status</h4>

                                        </div>

                                        <ul>

                                            <li>
                                                <strong>Dano</strong> - Gelo
                                            </li>

                                            <li>
                                                <strong>Resistencias</strong> - 50% de todas elementais e 30% de chaos
                                            </li>

                                            <li>
                                                <strong>Modificadores Fixos</strong>

                                                <p>Ganha Ward base igual a 5% de sua Vida Máxima(Maximum Life)</p>

                                                <p>Não tem Escudo de Energia(Energy Shield)</p>

                                                <p>Não pode ser totalmente desacelerado</p>

                                                <p>Imune a knockback</p>

                                            </li>

                                        </ul>

                                    </div>

                                    <div className="card-section">

                                        <div className="card-header">
                                            <h4>Drops Unicos</h4>
                                        </div>

                                        <ul>

                                            <li>
                                                Starlight Chalice
                                            </li>

                                            <li>
                                                Altered Perception
                                            </li>

                                        </ul>
                                    </div>

                                </div>

                                <div className="boss-info-card">

                                    <h4>Arena</h4>

                                    <ul>

                                        <li>
                                            A arena tem um formato retangular bem amplo, com um grande espelho ao longo da parede nordeste.
                                        </li>

                                        <li>
                                            O Uhtred quebra esse espelho para se esconder lá dentro e invocar inimigos (adds) durante as fases de transição.
                                        </li>

                                        <li>
                                            Depois da primeira transição até o fim da luta, o espelho também começa a disparar vários raios lasers em direções aleatórias.
                                        </li>

                                        <li>
                                            Esses lasers vão ficando cada vez mais largos conforme a vida do chefe diminui.
                                        </li>

                                    </ul>

                                </div>

                                <div className="boss-info-card boss-skills">

                                    <h4>Habilidades</h4>

                                    <ul>

                                        <li>
                                            <strong>Lasers do Espelho:</strong>

                                            Dispara várias fileiras de lasers pela arena, seja em linha reta ou na diagonal.
                                            Eles continuam atirando depois da primeira fase de invocação e ficam mais largos a cada etapa.
                                            Aplica o debuff Vislumbre do Infinito(Glimpse of Infinity) que reduz a sua velocidade de ação.
                                        </li>

                                        <li>
                                            <strong>Feixe de Gelo Giratório:</strong>

                                            Ele canaliza um raio negro e gira em círculo por mais ou menos 3 voltas e meia.
                                            Também aplica o debuff Vislumbre do Infinito(Glimpse of Infinity).
                                            Ele avisa quando vai soltar esse ataque: Sem escapatória!(No Escape!)
                                        </li>

                                        <li>
                                            <strong>Fogo Stygian:</strong>

                                            Dispara projéteis azul-escuros que aplicam o debuff Indiferença do Cosmos(Indifference of the Cosmos) que reduz a sua resistência máxima a gelo.
                                            Ele avisa quando vai soltar esse ataque: Inútil!(Futile!)
                                        </li>

                                        <li>
                                            <strong>Bola de Raio:</strong>

                                            Dispara uma onda de pequenas esferas elétricas monocromáticas que também aplicam o debuff Indiferença do Cosmos(Indifference of the Cosmos).
                                            Ele avisa quando vai soltar esse ataque: Renda-se! ou Insolente!(Give in! or Defiant Whelp!)
                                        </li>

                                        <li>
                                            <strong>Estrelas Perseguidoras:</strong>

                                            Invoca uma orb branca que fica perseguindo o jogador por até 10 segundos antes de estourar.
                                            Quando explode, cria uma poça cheia de mãos negras no chão que dura um tempo e causa Resfriamento(Chill).
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>

                        <div className="boss-container">

                            <div className="boss-header">

                                <img
                                    src=""
                                    alt=""
                                    className="boss-image"
                                />

                                <div className="boss-header-info">

                                    <h3>Vorana</h3>

                                    <p className="boss-description">
                                        Boss ligada ao Tujen
                                    </p>

                                </div>

                            </div>

                            <div className="boss-grid">

                                <div className="boss-info-card">

                                    <div className="card-section">

                                        <div className="card-header">

                                            <h4>Status</h4>

                                        </div>

                                        <ul>

                                            <li>
                                                <strong>Dano</strong> - Fisico
                                            </li>

                                            <li>
                                                <strong>Resistencias</strong> - 50% de todas elementais e 30% de chaos
                                            </li>

                                            <li>
                                                <strong>Modificadores Fixos</strong>

                                                <p>Ganha Ward base igual a 5% de sua Vida Máxima(Maximum Life)</p>

                                                <p>Não tem Escudo de Energia(Energy Shield)</p>

                                                <p>Não pode ser totalmente desacelerada</p>

                                            </li>

                                        </ul>
                                    </div>

                                    <div className="card-section">

                                        <div className="card-header">
                                            <h4>Drops Unicos</h4>
                                        </div>

                                        <ul>

                                            <li>
                                                Vorana's Preparation
                                            </li>

                                        </ul>
                                    </div>

                                </div>

                                <div className="boss-info-card">

                                    <h4>Arena</h4>

                                    <p>Não tem, aparece no mesmo mapa padrão que o resto dos Remnants</p>

                                </div>

                                <div className="boss-info-card boss-skills">

                                    <h4>Habilidades</h4>

                                    <ul>

                                        <li>
                                            <strong>A Ceifa Negra:</strong> Cria uma névoa escura que gira em torno do ponto onde a Vorana surge.
                                            Essa névoa aplica debuffs que acumulam e causam dano ao longo do tempo.
                                        </li>

                                        <li>
                                            <strong>Estrelas Orbitais:</strong> Esferas ficam girando pela arena e, de tempos em tempos, disparam projéteis na direção do jogador.
                                            Se você passar por dentro de uma delas, ela vai cair e explodir após um curto atraso, causando dano em área.
                                        </li>

                                        <li>
                                            <strong>Ciclone:</strong> Ela ataca continuamente ao seu redor enquanto avança em uma direção.
                                            Ela avisa quando vai soltar esse ataque: Vento da Morte!(Death Wind!)
                                        </li>

                                        <li>
                                            <strong>Laceração:</strong> Faz um golpe com as duas foices em formato de cruz e semicírculo bem na sua frente.
                                            Ela avisa quando vai soltar esse ataque: Vou te derrubar!(I shall cut you down!)
                                        </li>

                                        <li>
                                            <strong>Investida com Corte:</strong> Avança rapidamente e corta com as foices.
                                        </li>

                                        <li>
                                            <strong>Emboscada:</strong> Ela se esconde na névoa e fica imune a dano. Ela continua visível no minimapa, e também dá para ver um leve rastro de vento se movendo em direção ao centro da arena, indicando de onde ela vai reaparecer.
                                        </li>

                                    </ul>

                                </div>

                            </div>
                        </div>

                    </section>

                </MainContainer>

            </div>

        </div >
    );
}

export default Expedition;