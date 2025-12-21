import "../styles/Credits.css";
import FadeInSection from "./FadeInSection";

const Credits = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FadeInSection>
      <div id="credits">
        <div className="ending-credits">
          <div>Built and designed by Shaijo George.</div>
          <div>All rights reserved. © {currentYear}</div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Credits;