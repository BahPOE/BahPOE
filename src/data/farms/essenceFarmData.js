import essenceScarabIcon from "../../assets/scarabs/essence/icon/essence-scarab-icon.png";
import essenceScarabofAdaptationIcon from "../../assets/scarabs/essence/icon/essence-scarab-of-adaptation-icon.png";
import essenceScarabofAscentIcon from "../../assets/scarabs/essence/icon/essence-scarab-of-ascent-icon.png";
import essenceScarabofCalcificationIcon from "../../assets/scarabs/essence/icon/essence-scarab-of-calcification-icon.png";
import essenceScarabofStabilityIcon from "../../assets/scarabs/essence/icon/essence-scarab-of-stability-icon.png";

import essenceScarabPreview from "../../assets/scarabs/essence/preview/essence-scarab-preview.png";
import essenceScarabofAdaptationPreview from "../../assets/scarabs/essence/preview/essence-scarab-of-adaptation-preview.png";
import essenceScarabofAscentPreview from "../../assets/scarabs/essence/preview/essence-scarab-of-ascent-preview.png";
import essenceScarabofCalcificationPreview from "../../assets/scarabs/essence/preview/essence-scarab-of-calcification-preview.png";
import essenceScarabofStabilityPreview from "../../assets/scarabs/essence/preview/essence-scarab-of-stability-preview.png";


const essenceFarmData = [
    {
        id: "essence-low-tier",

        category: "essence",

        themeColor: "rgba(180, 120, 255, 0.09)",

        title: "Essencia em Tier Baixo",

        variant: "early",

        difficulty: "easy",

        buildType: "hybrid",

        description: "Farm com foco em monstros raros.",

        atlasLink: "https://poeplanner.com/a/6Z5e",

        consumables: [
            {
                icon: essenceScarabIcon,
                hoverPreview: essenceScarabPreview,
                name: "Essence Scarab",
                amount: 2
            },

            {
                icon: essenceScarabofAscentIcon,
                hoverPreview: essenceScarabofAscentPreview,
                name: "Essence Scarab of Ascent",
                amount: 1
            },
        ],

        layouts: [
            {
                name: "City Square"
            },
        ],
    },

];

export default essenceFarmData;