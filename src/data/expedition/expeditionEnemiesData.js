export const expeditionEnemies = [

    {
        title: "Categorias de Inimigos",

        type: "list",

        items: [
            {
                label: "Caveiras pequenas",
                text: "Monstros normais com os modificadores do evento"
            },

            {
                label: "Caveiras Maiores",
                text: "Runic Monsters, esses dropam Artefatos, Itens para dar Refresh na loja e Logbook's"
            },

            {
                label: "Baús",
                text: "A bandeira indica qual o tipo de baú que vai aparecer, a cor da bandeira indica o valor do seu conteúdo sendo Branca - Menor  Amarela - Média  Vermelha - Grande"
            },
        ],
    },

    {
        title: "Herança de Modificadores",

        paragraphs: [
            "Os modificadores são herdados pelas explosões seguintes, então posicionar corretamente as bombas aumenta muito sua eficiência.",

            "Exemplo: Runic Monsters com 40% increased quantity.",

            "Se você acumular 3 modificadores desse tipo, os monstros rúnicos terão um bônus total de 120% quantity, aumentando muito os drops."
        ],
    },

    {
        title: "Planejamento das bombas",

        paragraphs: [
            "Antes de focar apenas nas recompensas, verifique quais modificadores negativos sua build consegue lidar.",

            "Por exemplo: builds baseadas em leech podem ser completamente anuladas por modificadores que impedem roubo de vida."
        ],
    },

    {
        title: "Cuidado com modificadores negativos",

        className: "warning-card",

        paragraphs: [
            "Quanto maiores as recompensas, maior também a dificuldade. Alguns modificadores podem praticamente brickar seu mapa."
        ],

        dangerList: [
            "Imunidade ao seu tipo de dano",
            "Chance de block acumulada até 100%",
            "Regeneração extremamente alta"
        ],
    },
];