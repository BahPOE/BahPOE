import amanamuIcon from "../../assets/icons/boss-icons/abyss/Amanamu.png";
import ulamanIcon from "../../assets/icons/boss-icons/abyss/Ulaman.jpg";
import lightpoacherIcon from "../../assets/itens/icons/ulaman-amanamu/Lightpoacher-icon.png";
import tombfistIcon from "../../assets/itens/icons/ulaman-amanamu/Tombfist-icon.png";
import lightpoacherPreview from "../../assets/itens/previews/ulaman-amanamu/Lightpoacher.png";
import tombfistPreview from "../../assets/itens/previews/ulaman-amanamu/Tombfist.png";

export const abyssBosses = [
    {
        name: "Amanamu",

        subtitle: "Boss da Abyss Depths",

        image: amanamuIcon,

        status: {
            damage: "Físico",

            resistances: "30% de todas elementais e 15% de chaos",

            modifiers: [
                "Não pode ser totalmente desacelerado",
                "Imune a knockback",
                "Unwavering(Não pode ser stunnado)",
            ],
        },

        drops: [
            {
                name: "Lightpoacher (1~2 slots)",
                icon: lightpoacherIcon,
                preview: lightpoacherPreview,
            },
            "Bubonic Trail (1~2 slots)",
            {
                name: "Tombfist (1~2 slots)",
                icon: tombfistIcon,
                preview: tombfistPreview,
            },
            "Shroud of the Lightless (2~3 slots)",
            "Amanamu's Gaze",
            "Ulaman's Gaze",
            "Tecrod's Gaze",
            "Kurgal's Gaze",
        ],

        dropsDescription: "Além disso, ela sempre dropa um Stygian Vise raro e tem 50% de chance de dropar um cinto Darkness Enthroned.",

        arena: [
            {
                title: "Quando a vida dela chega em 75%, 50% e 25%",
                description: "Ela recua e abre o portal para o Stygian Spire. <br>O tempo de 90 segundos só corre enquanto você estiver lá dentro da sala do Spire. <br>Se não limpar os três portais dentro do tempo acumulado, ela foge. <br>Quando você quebra o Spire, abre o portal de volta. <br>Dois tuneis abrem do lado esquerdo e dois do lado direito."
            },
        ],

        skills: [
            {
                name: "Ataque Padrão",
                description: "Se você chegar perto, balança a espada."
            },

            {
                name: "Double Strike",
                description: "Ela dá dois golpes rápidos com a espada."
            },

            {
                name: "Chuva de Projéteis",
                description: "Ela flutua e canaliza uma metralhadora de projéteis na sua direção causando Dano físico pesado"
            },

            {
                name: "Cristais Explosivos",
                description: "Invoca cristais na arena que têm um grande raio de explosão quando ativados."
            },

            {
                name: "Totens de Proteção",
                description: "Ela invoca 4 totens que criam um escudo de invulnerabilidade. Você precisa quebrar os totens para voltar a dar dano nela. Quando aparecem, esses totens soltam morteiros e invocam esqueletos."
            },
        ],

        skillsDescription: "A Amanamu recupera 1% de vida sempre que consome uma Spirit Charge ou quando uma delas expira.",

    },

    {

        name: "Ulaman",

        subtitle: "Boss da Abyss Depths",

        image: ulamanIcon,

        status: {
            damage: "Físico",

            resistances: "40% de todas elementais e 25% de chaos",

            modifiers: [
                "Não pode ser totalmente desacelerado",
                "Imune a knockback",
            ],
        },

        drops: [
            "Lightpoacher (1~2 slots)",
            "Bubonic Trail (1~2 slots)",
            "Tombfist (1~2 slots)",
            "Shroud of the Lightless (2~3 slots)",
            "Amanamu's Gaze",
            "Ulaman's Gaze",
            "Tecrod's Gaze",
            "Kurgal's Gaze",
        ],

        dropsDescription: "Além disso, ela sempre dropa um Stygian Vise raro e tem 50% de chance de dropar um cinto Darkness Enthroned.",

        arena: [
            {
                title: "Quando a vida dela chega em 75%, 50% e 25%",
                description: "Ela recua e abre o portal para o Stygian Spire. <br>O tempo de 90 segundos só corre enquanto você estiver lá dentro da sala do Spire. <br>Se não limpar os três portais dentro do tempo acumulado, ela foge. <br>Quando você quebra o Spire, abre o portal de volta. <br>Dois tuneis abrem do lado esquerdo e dois do lado direito."
            }
        ],

        skills: [
            {
                name: "Ataque Padrão",
                description: "Levanta a arma acima da cabeça e balança para baixo.",
            },

            {
                name: "Morteiro de Esqueletos",
                description: "Dispara uma salva de projéteis em círculo pela arena. Eles dão dano de Gelo e invocam esqueletos onde batem. Matar esses esqueletos dá Spirit Charges para o Ulaman.",
            },

            {
                name: "Spirit Burst",
                description: "Ele usa isso logo após o Morteiro de Esqueletos se tiver cargas suficientes. Ele golpeia com a espada 3 vezes seguidas, soltando duas ondas de projéteis espirituais em cada golpe.",
            },

            {
                name: "Cleave",
                description: "Balança a arma em um arco na sua direção.",
            },

            {
                name: "Spirit Cremation",
                description: "Usa Cremation com uma skin baseada na Abyss. Cria um gêiser verde que fica cuspindo projéteis explosivos na área por um tempo.",
            },

            {
                name: "Teleport Strike",
                description: "Teleporta para um local marcado e corta três vezes.",
            },
        ],
    },
];