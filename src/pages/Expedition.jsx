import { Link } from "react-router-dom";

import Overlay from "../components/Overlay";
import MainContainer from "../components/MainContainer";
import NpcCard from "../components/expedition/NpcCard";
import LoopCard from "../components/expedition/LoopCard";
import InfoCard from "../components/expedition/InfoCard";
import { npcs, expeditionLoop } from "../data/expeditionData";
import arenaIcon from "../assets/icons/boss-icons/arena-icon.png";
import dropsIcon from "../assets/icons/boss-icons/drops-icon.png";
import shieldIcon from "../assets/icons/boss-icons/shield-icon.png";
import skillsIcon from "../assets/icons/boss-icons/skills-icon.png";
import starIcon from "../assets/icons/boss-icons/star-icon.png";
import statusIcon from "../assets/icons/boss-icons/status-icon.png";
import swordIcon from "../assets/icons/boss-icons/sword-icon.png";
import medvedIcon from "../assets/icons/boss-icons/expedition/Medved.png";
import olrothIcon from "../assets/icons/boss-icons/expedition/Olroth.png";
import uhtredIcon from "../assets/icons/boss-icons/expedition/Uhtred.png";
import voranaIcon from "../assets/icons/boss-icons/expedition/Vorana.png";

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
                            Explosivos, artefatos,
                            NPCs mercadores e Logbooks.
                        </p>

                        <div className="expedition-divider" />

                    </section>

                    {/* INTRODUÇÃO */}

                    <section className="expedition-section">

                        <h2>O que é Expedition?</h2>

                        <p className="expedition-intro">
                            Expedition é uma mecânica onde um dos
                            quatro NPCs exploradores aparece no mapa
                            pedindo sua ajuda para escavar ruínas antigas.
                        </p>

                        <p>
                            Você posiciona explosivos manualmente
                            e depois ativa o detonador,
                            revelando monstros, baús
                            e modificadores especiais.
                        </p>

                        <InfoCard className="intro-warning-card">

                            <h3>Importante</h3>

                            <p>
                                Os modificadores são herdados
                                pelas explosões seguintes,
                                tanto os positivos quanto os negativos.
                            </p>

                        </InfoCard>

                    </section>

                    {/* GRUPOS */}

                    <section className="expedition-section">

                        <h2>Grupos de Exploração</h2>

                        <p className="group-intro">
                            Cada NPC pertence a um grupo de exploração diferente
                            e possui mecânicas próprias de loja e interação.
                        </p>

                        <p className="group-intro">
                            Para negociar com eles,
                            você precisa obter artefatos específicos daquele grupo.
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

                        <div className="mechanic-loop-section">

                            <h3>Loop da Mecânica</h3>

                            <p className="loop-description">
                                O ciclo principal da Expedition é simples:
                            </p>

                            <div className="loop-grid">

                                {expeditionLoop.map((step) => (

                                    <LoopCard
                                        key={step}
                                        text={step}
                                    />
                                ))}

                            </div>
                        </div>

                        <p className="group-conclusion">
                            Apesar de parecer complexo no início,
                            o fluxo das lojas é rápido de aprender
                            e fica natural depois de algumas interações.
                        </p>

                    </section>

                    {/* LOGBOOK */}

                    <section className="expedition-section">

                        <h2>Logbooks</h2>

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

                    </section>

                    {/* DIFERENÇAS ENTRE OS EVENTOS */}

                    <section className="expedition-section">

                        <h2>Diferença entre os eventos</h2>

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

                    </section>

                    {/* TIPOS DE INIMIGOS */}

                    <section className="expedition-section">

                        <h2>
                            Tipos de inimigos da Expedition
                        </h2>

                        <InfoCard className="enemy-card">

                            <h3>Categorias de Inimigos</h3>

                            <ul className="enemy-list">

                                <li>
                                    <strong>Caveiras pequenas:</strong> Monstros normais com os modificadores do evento
                                </li>

                                <li>
                                    <strong>Caveiras Maiores:</strong> Runic Monsters, esses dropam Artefatos, Itens para dar Refresh na loja e Logbook's
                                </li>

                                <li>
                                    <strong>Baús:</strong> A bandeira indica qual o tipo de baú que vai aparecer, a cor da bandeira indica o valor do seu conteúdo sendo Branca - Menor  Amarela - Media  Vermelha - Grande
                                </li>

                            </ul>

                        </InfoCard>

                        <InfoCard className="enemy-card">

                            <h3>Herança de Modificadores</h3>

                            <p>
                                Os modificadores são herdados pelas explosões seguintes,
                                então posicionar corretamente as bombas aumenta muito
                                sua eficiência.
                            </p>

                            <p>
                                Exemplo:
                                Runic Monsters com
                                <strong> 40% increased quantity </strong>.
                            </p>

                            <p>
                                Se você acumular 3 modificadores desse tipo,
                                os monstros rúnicos terão um bônus total de
                                <strong> 120% quantity</strong>,
                                aumentando muito os drops.
                            </p>

                        </InfoCard>

                        <InfoCard className="enemy-card">

                            <h3>Planejamento das bombas</h3>

                            <p>
                                Antes de focar apenas nas recompensas,
                                verifique quais modificadores negativos
                                sua build consegue lidar.
                            </p>

                            <p>
                                Por exemplo:
                                builds baseadas em leech podem ser
                                completamente anuladas por modificadores
                                que impedem roubo de vida.
                            </p>

                        </InfoCard>

                        <InfoCard className="enemy-card warning-card">

                            <h3>Cuidado com modificadores negativos</h3>

                            <p>
                                Quanto maiores as recompensas,
                                maior também a dificuldade.
                                Alguns modificadores podem praticamente
                                "brickar" seu mapa.
                            </p>

                            <ul className="danger-list">

                                <li>
                                    Imunidade a tipos de dano
                                </li>

                                <li>
                                    Chance de block acumulada até 100%
                                </li>

                                <li>
                                    Regeneração extremamente alta
                                </li>

                            </ul>

                        </InfoCard>

                        <p className="boss-intro">
                            Existem 4 bosses exclusivos encontrados apenas em Logbooks.
                            <br />
                            Em média, eles aparecem a cada 5 áreas.
                        </p>

                        <div className="boss-list">

                            <div className="boss-card">

                                <h3>Olroth</h3>

                                <p>
                                    Danning — Knights of the Sun
                                </p>

                                <span>Área level 81+</span>

                            </div>

                            <div className="boss-card">

                                <h3>Medved</h3>

                                <p>
                                    Gwennen — Druids of the Broken Circle
                                </p>

                                <span>Área level 68+</span>

                            </div>

                            <div className="boss-card">

                                <h3>Uhtred</h3>

                                <p>
                                    Rog — Order of the Chalice
                                </p>

                                <span>Área level 75+</span>

                            </div>

                            <div className="boss-card">

                                <h3>Vorana</h3>

                                <p>
                                    Tujen — Black Scythe Mercenaries
                                </p>

                                <span>Área level 68+</span>

                            </div>

                        </div>

                    </section>

                    {/* BOSS */}

                    <section className="expedition-section">

                        <div>

                            <h2>Bosses da Expedition</h2>

                            <div className="boss-container">

                                <div className="boss-header">

                                    <img
                                        src={olrothIcon}
                                        alt="Olroth"
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

                                                <div className="card-title">

                                                    <img
                                                        src={statusIcon}
                                                        alt="Status"
                                                        className="card-title-icon"
                                                    />

                                                    <h4>Status</h4>

                                                </div>

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

                                                <div className="card-title">

                                                    <img
                                                        src={dropsIcon}
                                                        alt="Drops Unicos"
                                                        className="card-title-icon"
                                                    />

                                                    <h4>Drops Unicos</h4>

                                                </div>

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

                                        <div className="card-title">

                                            <img
                                                src={arenaIcon}
                                                alt="Arena"
                                                className="card-title-icon"
                                            />

                                            <h4>Arena</h4>

                                        </div>

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

                                        <div className="card-title">

                                            <img
                                                src={skillsIcon}
                                                alt="Habilidades"
                                                className="card-title-icon"
                                            />

                                            <h4>Habilidades</h4>

                                        </div>

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
                                        src={medvedIcon}
                                        alt="Medved"
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

                                                <div className="card-title">

                                                    <img
                                                        src={statusIcon}
                                                        alt="Status"
                                                        className="card-title-icon"
                                                    />

                                                    <h4>Status</h4>

                                                </div>

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

                                                <div className="card-title">

                                                    <img
                                                        src={dropsIcon}
                                                        alt="Drops Unicos"
                                                        className="card-title-icon"
                                                    />

                                                    <h4>Drops Unicos</h4>

                                                </div>

                                            </div>

                                            <ul>

                                                <li>
                                                    Elixir of the Unbroken Circle
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    <div className="boss-info-card">

                                        <div className="card-title">

                                            <img
                                                src={arenaIcon}
                                                alt="Arena"
                                                className="card-title-icon"
                                            />

                                            <h4>Arena</h4>

                                        </div>

                                        <p>Não tem, aparece no mesmo mapa padrão que o resto dos Remnants</p>

                                    </div>

                                    <div className="boss-info-card boss-skills">

                                        <div className="card-title">

                                            <img
                                                src={skillsIcon}
                                                alt="Habilidades"
                                                className="card-title-icon"
                                            />

                                            <h4>Habilidades</h4>

                                        </div>

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
                                    src={uhtredIcon}
                                    alt="Uhtred"
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

                                            <div className="card-title">

                                                <img
                                                    src={statusIcon}
                                                    alt="Status"
                                                    className="card-title-icon"
                                                />

                                                <h4>Status</h4>

                                            </div>

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

                                            <div className="card-title">

                                                <img
                                                    src={dropsIcon}
                                                    alt="Drops Unicos"
                                                    className="card-title-icon"
                                                />

                                                <h4>Drops Unicos</h4>

                                            </div>

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

                                    <div className="card-title">

                                        <img
                                            src={arenaIcon}
                                            alt="Arena"
                                            className="card-title-icon"
                                        />

                                        <h4>Arena</h4>

                                    </div>

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

                                    <div className="card-title">

                                        <img
                                            src={skillsIcon}
                                            alt="Habilidades"
                                            className="card-title-icon"
                                        />

                                        <h4>Habilidades</h4>

                                    </div>

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
                                    src={voranaIcon}
                                    alt="Vorana"
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

                                            <div className="card-title">

                                                <img
                                                    src={statusIcon}
                                                    alt="Status"
                                                    className="card-title-icon"
                                                />

                                                <h4>Status</h4>

                                            </div>
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

                                            <div className="card-title">

                                                <img
                                                    src={dropsIcon}
                                                    alt="Drops Unicos"
                                                    className="card-title-icon"
                                                />

                                                <h4>Drops Unicos</h4>

                                            </div>

                                        </div>

                                        <ul>

                                            <li>
                                                Vorana's Preparation
                                            </li>

                                        </ul>
                                    </div>

                                </div>

                                <div className="boss-info-card">

                                    <div className="card-title">

                                        <img
                                            src={arenaIcon}
                                            alt="Arena"
                                            className="card-title-icon"
                                        />

                                        <h4>Arena</h4>

                                    </div>

                                    <p>Não tem, aparece no mesmo mapa padrão que o resto dos Remnants</p>

                                </div>

                                <div className="boss-info-card boss-skills">

                                    <div className="card-title">

                                        <img
                                            src={skillsIcon}
                                            alt="Habilidades"
                                            className="card-title-icon"
                                        />

                                        <h4>Habilidades</h4>

                                    </div>

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