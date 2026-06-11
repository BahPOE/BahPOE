import Abyss_Scarab from "../../assets/scarabs/abyss/Abyss_Scarab.png";

import Abyss_Scarab_of_Multitudes from "../../assets/scarabs/abyss/Abyss_Scarab_of_Multitudes.png";

import abyssRiftBackground from "../../assets/farm-backgrounds/abyss/abyss-rift-background.png";

const abyssFarmData = [
    {
        id: "abyss-exp",

        category: "abyss",

        image: abyssRiftBackground,

        title: "Abyss + XP",

        variant: "early",

        difficulty: "medium",

        buildType: "hybrid",

        description: "Farm focado em Exp e Báus.",

        atlasLink: "https://poeplanner.com/a/6ZgP",

        consumables: [
            {
                icon: Abyss_Scarab,
                name: "Abyss Scarab",
                amount: 2
            },

            {
                icon: Abyss_Scarab_of_Multitudes,
                name: "Abyss Scarab of Multitudes",
                amount: 2
            },
        ],

        layouts: [
            {
                name: "Lighthouse",
            },
        ],

        mapDevice: {
            name: "Quantity Extra",
        }
    },

];

export default abyssFarmData;