import medvedIcon from "../assets/icons/boss-icons/expedition/Medved.png";
import olrothIcon from "../assets/icons/boss-icons/expedition/Olroth.png";
import uhtredIcon from "../assets/icons/boss-icons/expedition/Uhtred.png";
import voranaIcon from "../assets/icons/boss-icons/expedition/Vorana.png";

export const expeditionBosses = [
    {
        name: "Olroth",

        subtitle: "Boss ligado ao Danning",

        image: olrothIcon,

        status: {
            damage: "Fogo e Físico",

            resistances: "50% de todas elementais e 30% de chaos",

            modifiers: [
                "Ganha Ward base igual a 5% de sua Vida Máxima",
                "Não tem Escudo de Energia",
                "Não pode ser totalmente desacelerado",
                "Imune a knockback",
            ],
        },

        drops: [
            "Olroth's Resolve",
            "Cadigan's Crown",
            "Vorana's March",
            "Olroth's Charge",
        ],

        dropsDescription: "Além disso, ao derrotar Olroth vai aparecer um Altar para adquirir ou trocar outra Bloodline para a Bloodline dele.",

        arena: [
            {
                title: "Chama Exterminadora",
                description: "A chama gira pela arena disparando um laser que persegue o jogador. Ela para durante a fase de invulnerabilidade. De vez em quando, solta um feixe que deixa uma linha de fogo no chão por um tempo."
            },
            {
                title: "Portais Rúnicos",
                description: "Portais que invocam inimigos extras. Aparece um em cada fase de invulnerabilidade e você precisa usar explosivos para detonar o portal e pará- los"
            },
            {
                title: "Estrelas de Cristal",
                description: "Cristais que emitem um Righteous Fire(aura que causa dano de fogo contínuo) e Blind(cegueira) em quem estiver perto. Surge um em cada fase de invulnerabilidade e também pode ser desativado com explosivos."
            },
        ],

        skills: [
            {
                name: "Investida",
                description: "Ele avança rápido e manda um corte em semicírculo ou uma estocada. Se te pegar, você fica Maim(mutilado)"
            },

            {
                name: "Arremesso de Espada",
                description: "Ele lança a espada, ela gira em linha reta e volta para a mão dele, causando Bleeding(sangramento)"
            },

            {
                name: "Cleave",
                description: "Uma sequência de ataques convertidos em dano de fogo"
            },

            {
                name: "Gaiola de Luz",
                description: "Um círculo com 6 feixes de luz que se fecha na sua posição e depois expande, causando dano em anel. Ele avisa quando vai soltar esse ataque: Purify!(Purificar!)"
            },

            {
                name: "Pancada no Chão",
                description: "Ele carrega um golpe e soca o chão com tudo, ignorando metade da sua chance de bloqueio e esquiva. Deixa uma área que aplica o debuff Enervation(Enervação) isso reduz a velocidade de movimento e impede a recuperação de vida e escudo. Ele avisa quando vai soltar esse ataque: Wasteland!(Terra desolada!)"
            },

            {
                name: "Invulnerabilidade",
                description: "Quando a vida dele chega a zero, ressuscita com vida cheia e fica invulnerável. Ele só volta a tomar dano depois que você detonar um Portal Rúnico ou uma Estrela de Cristal. Isso acontece duas vezes na luta."
            },
        ],

    },

    {

        name: "Medved",

        subtitle: "Boss ligado a Gwennen",

        image: medvedIcon,

        status: {
            damage: "Fisico",

            resistances: "50% de todas elementais e 30% de chaos",

            modifiers: [
                "Ganha Ward base igual a 5% de sua Vida Máxima",
                "Não tem Escudo de Energia",
            ],
        },

        drops: [
            "Elixir of the Unbroken Circle",
        ],

        arena: [
            {
                title: "Arena",
                description: "Não tem, aparece no mesmo mapa padrão que o resto dos Remnants",
            }
        ],

        skills: [
            {
                name: "Salto Esmagador",
                description: "Pula alto e cai com tudo no chão, causando dano em área no impacto.",
            },

            {
                name: "Cleave",
                description: "Um golpe com um dos machados, feito em um ângulo meio enviesado bem na sua frente.",
            },

            {
                name: "Ataque Combo",
                description: "Avança em linha reta dando um golpe com cada machado e termina atacando com as duas armas ao mesmo tempo.",
            },

            {
                name: "Arremesso de Rocha",
                description: "Se atira para frente enquanto lança uma pedra em linha reta.",
            },

            {
                name: "Invocar Cultista",
                description: "Quando a vida dele chega em 75%, 50% e 25%, ele chama ajudantes que se conectam a ele (tether). Ele avisa quando vai soltar esse ataque: Aid me!(Me ajudem!)",
            },

            {
                name: "Invocar Aranha",
                description: "Invoca várias aranhas fraquinhas para te cercar. Ele avisa quando vai soltar esse ataque: Swarm!(Enxame!)",
            },
        ],

    },

    {

        name: "Vorana",

        subtitle: "Boss ligada ao Tujen",

        image: voranaIcon,

        status: {
            damage: "Físico",

            resistances: "50% de todas elementais e 30% de chaos",

            modifiers: [
                "Ganha Ward base igual a 5% de sua Vida Máxima",
                "Não tem Escudo de Energia",
                "Não pode ser totalmente desacelerado",
            ],
        },

        drops: [
            "Vorana's Preparation",
        ],

        arena: [
            {
                title: "Arena",
                description: "Não tem, aparece no mesmo mapa padrão que o resto dos Remnants"
            },
        ],

        skills: [
            {
                name: "A Ceifa Negra",
                description: "Cria uma névoa escura que gira em torno do ponto onde a Vorana surge. Essa névoa aplica debuffs que acumulam e causam dano ao longo do tempo."
            },

            {
                name: "Estrelas Orbitais",
                description: "Esferas ficam girando pela arena e, de tempos em tempos, disparam projéteis na direção do jogador. Se você passar por dentro de uma delas, ela vai cair e explodir após um curto atraso, causando dano em área."
            },

            {
                name: "Ciclone",
                description: "Ela ataca continuamente ao seu redor enquanto avança em uma direção. Ela avisa quando vai soltar esse ataque: Vento da Morte!(Death Wind!)"
            },

            {
                name: "Laceração",
                description: "Faz um golpe com as duas foices em formato de cruz e semicírculo bem na sua frente. Ela avisa quando vai soltar esse ataque: Vou te derrubar!(I shall cut you down!)"
            },

            {
                name: "Investida com Corte",
                description: "Avança rapidamente e corta com as foices."
            },

            {
                name: "Emboscada",
                description: "Ela se esconde na névoa e fica imune a dano. Ela continua visível no minimapa, e também dá para ver um leve rastro de vento se movendo em direção ao centro da arena, indicando de onde ela vai reaparecer."
            },
        ],

    },

    {

        name: "Uhtred",

        subtitle: "Boss ligado ao Rog",

        image: uhtredIcon,

        status: {
            damage: "Gelo",

            resistances: "50% de todas elementais e 30% de chaos",

            modifiers: [
                "Ganha Ward base igual a 5% de sua Vida Máxima",
                "Não tem Escudo de Energia",
                "Não pode ser totalmente desacelerado",
                "Imune a knockback",
            ],
        },

        drops: [
            "Starlight Chalice",
            "Altered Perception",
        ],

        arena: [
            {
                title: "Grande Espelho",
                description: "A arena tem um formato retangular bem amplo, com um grande espelho ao longo da parede nordeste."
            },

            {
                title: "Imagem Refletida",
                description: "O Uhtred quebra esse espelho para se esconder lá dentro e invocar inimigos (adds) durante as fases de transição."
            },

            {
                title: "Lasers",
                description: "Depois da primeira transição até o fim da luta, o espelho também começa a disparar vários raios lasers em direções aleatórias."
            },

            {
                title: "Laser Plus",
                description: "Esses lasers vão ficando cada vez mais largos conforme a vida do chefe diminui."
            },
        ],

        skills: [
            {
                name: "Lasers do Espelho",
                description: "Dispara várias fileiras de lasers pela arena, seja em linha reta ou na diagonal. Eles continuam atirando depois da primeira fase de invocação e ficam mais largos a cada etapa. Aplica o debuff Vislumbre do Infinito(Glimpse of Infinity) que reduz a sua velocidade de ação."
            },

            {
                name: "Feixe de Gelo Giratório",
                description: "Ele canaliza um raio negro e gira em círculo por mais ou menos 3 voltas e meia. Também aplica o debuff Vislumbre do Infinito(Glimpse of Infinity). Ele avisa quando vai soltar esse ataque: Sem escapatória!(No Escape!)"
            },

            {
                name: "Fogo Stygian",
                description: "Dispara projéteis azul-escuros que aplicam o debuff Indiferença do Cosmos(Indifference of the Cosmos) que reduz a sua resistência máxima a gelo. Ele avisa quando vai soltar esse ataque: Inútil!(Futile!)"
            },

            {
                name: "Bola de Raio",
                description: "Dispara uma onda de pequenas esferas elétricas monocromáticas que também aplicam o debuff Indiferença do Cosmos(Indifference of the Cosmos). Ele avisa quando vai soltar esse ataque: Renda-se! ou Insolente!(Give in! or Defiant Whelp!)"
            },

            {
                name: "Estrelas Perseguidoras",
                description: "Invoca uma orb branca que fica perseguindo o jogador por até 10 segundos antes de estourar. Quando explode, cria uma poça cheia de mãos negras no chão que dura um tempo e causa Resfriamento(Chill)."
            },
        ]

    },
];