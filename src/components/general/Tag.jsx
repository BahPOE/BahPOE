import "./Tag.css";

const tagConfig = {
    early: {
        label: "Early",
        className: "tag-early",
    },

    midgame: {
        label: "Mid-Game",
        className: "tag-midgame",
    },

    endgame: {
        label: "Endgame",
        className: "tag-endgame",
    },

    easy: {
        label: "Fácil",
        className: "tag-easy",
    },

    medium: {
        label: "Médio",
        className: "tag-medium",
    },

    hard: {
        label: "Difícil",
        className: "tag-hard",
    },

    clear: {
        label: "Map Clear",
        className: "tag-clear",
    },

    boss: {
        label: "Boss",
        className: "tag-boss",
    },
};

function Tag({ type }) {

    const tag = tagConfig[type];

    if (!tag) {
        return null;
    }

    return (
        <span className={`tag ${tag.className}`}>
            {tag.label}
        </span>
    );
}

export default Tag;