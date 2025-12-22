import "../styles/Intro.css";
import { ReactTyped } from "react-typed";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FadeInSection from "./FadeInSection";
import TechWaves from "./TechWaves";

const Intro = () => {
    return (
        <div id="intro">
            <TechWaves />
            <div className="intro-title-container">
                <ReactTyped
                    strings={["hi, <span class='intro-name'>shaijo</span> here."]}
                    typeSpeed={120}
                    backSpeed={50}
                    className="intro-title"
                    contentType="html"
                    loop={false}
                    showCursor={true}
                    cursorChar="|"
                    />
            </div>
            <FadeInSection>
                <div className="intro-subtitle">I create stuff sometimes.</div>
                <div className="intro-desc">
                    I'm a software engineer passionate about building impactful products.
                    I love working on full-stack applications, mobile apps, and exploring
                    new technologies. From Flutter apps to web systems, I enjoy solving
                    real-world problems through code.
                </div>
                <a href="mailto:shaijokuttikkatt@gmail.com" className="intro-contact">
                    <EmailRoundedIcon /> Say hi!
                </a>
            </FadeInSection>
        </div>
    );
};

export default Intro;