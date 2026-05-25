import MiniBossCard from "../MiniBossCard";
import { abyssMiniBosses } from "../../../../data/abyss/abyssMiniBossesData";

import MechanicSection from "../../../layout/MechanicSection";
import ContentCard from "../../../general/ContentCard";
import InfoList from "../../../general/InfoList";
import ParagraphGroup from "../../../general/ParagraphGroup";

function AbyssEnemies() {

    return (

        <>

            <div className="boss-list">

                {abyssMiniBosses.map((boss) => (

                    <MiniBossCard
                        key={boss.name}
                        boss={boss}
                    />

                ))}

            </div>

        </>

    );
}

export default AbyssEnemies;