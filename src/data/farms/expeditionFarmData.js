import expeditionScarab from "../../assets/scarabs/expedition/expeditionScarab.png";

const expeditionFarmData = [
    {
        id: "expedition-artifacts",

        title: "Expedition",

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

        title: "Expedition",

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