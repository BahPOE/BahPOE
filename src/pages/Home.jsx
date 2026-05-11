import zanaIcon from "../assets/icons/zanaicon.png";
import buildIcon from "../assets/icons/buildicon.png";
import farmsIcon from "../assets/icons/farmsicon.png";
import bahpoeLogo from "../assets/logo/bahpoelogo.png";
import Overlay from "../components/Overlay";
import MainContainer from "../components/MainContainer";
import HubCard from "../components/HubCard";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

    const cards = [
        {
            title: "Builds",
            desc: "Builds com progressão do league start ao endgame",
            icon: buildIcon,
            path: "/builds",
        },
        {
            title: "Farms",
            desc: "Consistentes e Efetivos",
            icon: farmsIcon,
            path: "/farms",
        },
        {
            title: "Mecânicas",
            desc: "Explicações sobre as mecânicas do jogo",
            icon: zanaIcon,
            path: "/mechanics",
        }
    ];

    return (
        <div
            style={{
                backgroundImage: "url('/background/bghome.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                width: "100%",
                position: "relative",
            }}
        >

            {/* OVERLAY */}
            <Overlay theme="arcano" />

            {/* LOGO NO TOPO */}
            <div
                style={{
                    position: "absolute",
                    top: "20px",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <img
                    src={bahpoeLogo}
                    alt="BahPOE"
                    style={{
                        width: "300px",
                    }}
                />
            </div>

            {/* CONTEÚDO CENTRAL */}
            <div
                style={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <MainContainer>
                    {/* TEXTO GUIA */}
                    <div className="home-title">
                        Escolha por onde começar
                    </div>

                    {/* CARDS */}
                    <div className="home-cards">
                        
                        {cards.map((card) => (
                            <Link
                                key={card.title}
                                to={card.path}
                                className="home-card-link"
                            >
                                <HubCard
                                    title={card.title}
                                    desc={card.desc}
                                    icon={card.icon}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* CRAFT */}
                    <div
                        style={{
                            width: "100%",
                            height: "60px",
                            background: "rgba(0,0,0,0.5)",
                            border: "1px dashed rgba(77,166,255,0.4)",
                            borderRadius: "8px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#4da6ff",
                            opacity: 0.8,
                            marginTop: "25px",
                        }}
                    >
                        Craft (em breve)
                    </div>
                </MainContainer>
            </div>
        </div>
    );
}

export default Home;