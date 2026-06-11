import expeditionScarab from "../../assets/scarabs/expedition/expeditionScarab.png";

const expeditionFarmData = [
    {
        id: "expedition-artifacts",

        category: "expedition",

        title: "Expedition Artefatos",

        variant: "early",

        difficulty: "easy",

        buildType: "clear",

        description: "Farm focado em Artefatos.",

        atlasLink: "https://poeplanner.com/a/6J-y",

        consumables: [],

        layouts: [
            {
                name: "Dunes",
            },

            {
                name: "Jungle Valley",
            },
        ],

        mapDevice: {
            name: "Quantity Extra",
        }
    },

    {
        id: "expedition-logbooks",

        category: "expedition",

        title: "Expedition Logbooks",

        variant: "midgame",

        difficulty: "medium",

        buildType: "clear",

        description: "Farm focado em Logbooks.",

        atlasLink: "https://poeplanner.com/a/6J-1",

        consumables: [
            {
                icon: expeditionScarab,
                name: "Expedition Scarab",
                amount: 1
            },
        ],

        layouts: [
            {
                name: "Dunes",
            },

            {
                name: "Jungle Valley",
            },
        ],

        mapDevice: {
            name: "Quantity Extra",
        }
    }
];

export default expeditionFarmData;