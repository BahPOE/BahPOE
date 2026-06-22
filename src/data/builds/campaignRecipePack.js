export const campaignRecipePack = {

    sections: [

        // =========================
        // 🟡 DEFESA / RESISTÊNCIAS
        // =========================

        {
            type: "recipe",

            tags: ["campaign", "defense", "resistance"],

            title: "Elemental Resistance Ring",

            problem: "Você está sem resistência nos primeiros atos da campanha",

            inputs: [
                "Iron Ring",
                "Qualquer Gema Vermelha / Verde / Azul"
            ],

            output: "Ring com a resistência elemental correspondente"
        },

        {
            type: "recipe",

            tags: ["campaign", "defense"],

            title: "Life / Mana Flask Upgrade",

            problem: "Sempre mantenha seus Flasks em Tiers altos",

            inputs: [
                "3x Life Flask iguais",
                "3x Mana Flask iguais",
            ],

            output: "Life / Mana Flask de um grau superior"
        },

        // =========================
        // 🟠 MOVEMENT / QUALITY OF LIFE
        // =========================

        {
            type: "recipe",

            tags: ["campaign", "movement"],

            title: "Movement Speed Boots",

            problem: "Se você ainda não encontrou botas com Movement Speed",

            inputs: [
                "Normal Boots",
                "Magic ou Rare Boots que já tenham % increased Movement Speed",
                "Orb of Augmentation",
                "Quicksilver Flask",
            ],

            output: "Botas com % de Movement Speed em um nível maior"
        },

        // =========================
        // 🔴 DAMAGE SCALING EARLY
        // =========================

        {
            type: "recipe",

            tags: ["campaign", "damage", "physical"],

            title: "Physical Damage Weapon",

            problem: "Você encontrou uma arma com bons sockets/links, mas sem dano suficiente",

            inputs: [
                "Arma Física de qualquer Raridade",
                "Blacksmith's Whetstone",
                "Rustic Sash"
            ],

            output: "Arma com 40 to 84% Increased Physical Damage"
        },

        {
            type: "recipe",

            tags: ["campaign", "damage", "spell"],

            title: "Spell Damage Weapon",

            problem: "Você encontrou uma arma com bons sockets/links, mas sem dano suficiente",

            inputs: [
                "Arma Mágica de qualquer Raridade",
                "Blacksmith's Whetstone",
                "Rustic Sash"
            ],

            output: "Arma de uma mão com 10 to 39% Increased Spell Damage e Arma de duas mãos com 15 to 59% Increased Spell Damage"
        },
    ]
};