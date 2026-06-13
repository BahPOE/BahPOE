import abyssScarabIcon from "../../assets/scarabs/abyss/icon/abyss-scarab-icon.png";

import abyssScarabPreview from "../../assets/scarabs/abyss/preview/abyss-scarab-preview.png";

import abyssScarabOfMultitudesIcon from "../../assets/scarabs/abyss/icon/abyss-scarab-of-multitudes-icon.png";

import abyssScarabOfMultitudesPreview from "../../assets/scarabs/abyss/preview/abyss-scarab-of-multitudes-preview.png";

import abyssRiftBackground from "../../assets/farm-backgrounds/abyss/background/abyss-rift-background.png";

import lighthousePreview from "../../assets/farm-backgrounds/abyss/preview/lighthouse-preview.jpg"

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
                icon: abyssScarabIcon,
                hoverPreview: abyssScarabPreview,
                name: "Abyss Scarab",
                amount: 2
            },

            {
                icon: abyssScarabOfMultitudesIcon,
                hoverPreview: abyssScarabOfMultitudesPreview,
                name: "Abyss Scarab of Multitudes",
                amount: 2
            },
        ],

        layouts: [
            {
                name: "Lighthouse"
            },
        ],
    },

];

export default abyssFarmData;