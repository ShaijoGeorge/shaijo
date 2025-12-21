import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
    const tech_stack = [
        "Flutter/Dart",
        "React.js",
        "Python",
        "JavaScript",
        "PHP/Symfony",
        "Node.js",
        "PostgreSQL",
        "Supabase",
        "OpenCV",
        "FastAPI"
  ];

  return (
    <div id="about">
        <FadeInSection>
            <div className="section-header">
                <span className="section-title">/ about me</span>
            </div>
            <div className="about-content">
                <div className="about-description">
                    <p>
                        I'm a passionate software engineer who loves building applications
                        that solve real-world problems. My journey spans across mobile
                        development, web applications, and AI-powered systems.
                    </p>
                    <p>Here are some technologies I've been working with:</p>
                    <ul className="tech-stack">
                        {tech_stack.map((tech_item, i) => (
                            <FadeInSection key={i} delay={`${i + 1}00ms`}>
                            <li>{tech_item}</li>
                            </FadeInSection>
                        ))}
                    </ul>
                    <p>
                        Outside of coding, I enjoy exploring new technologies, contributing
                        to open-source projects, and continuously learning about emerging
                        tech trends.
                    </p>
                </div>
                <div className="about-image">
                    <img alt="Shaijo George" src="/assets/me.jpg" />
                </div>
            </div>
        </FadeInSection>
    </div>
  );
};

export default About;