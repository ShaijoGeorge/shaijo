import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

const Projects = () => {
  const spotlightProjects = {
    "Verso": {
      title: "verso",
      desc: "A modern mobile Bible reading tracker built with Flutter, featuring cloud sync with Supabase, interactive analytics charts, and daily reminders to help users maintain consistent reading habits across 73 books.",
      techStack: "FLUTTER, SUPABASE, RIVERPOD, MATERIAL 3",
      link: "https://github.com/ShaijoGeorge/Verso",
      open: "",
      image: "/assets/projects/verso/verso.png"
    },
    "SimplifyThem": {
      title: "simplifythem",
      desc: "Insurance Agency Management System built with PHP Symfony. Multi-tenant architecture with policy tracking, client management, bulk Excel imports, WhatsApp reminders via interakt.ai, and dynamic Indian GST calculations.",
      techStack: "PHP 8.4, SYMFONY 8.0, POSTGRESQL, EASYADMIN",
      link: "#",
      open: "",
      image: "/assets/projects/simplifythem/simplifythem.png"
    },
    "JoCAPTCHA": {
      title: "jocaptcha",
      desc: "Modern CAPTCHA system using multi-modal challenges (Odd-One-Out, Drag & Drop, Rotate) with FastAPI backend, React frontend, Redis caching, and real-time admin playground for configuration. Emphasizes UX and security over traditional text-based CAPTCHAs.",
      techStack: "REACT, FASTAPI, REDIS, TAILWIND CSS",
      link: "https://github.com/ShaijoGeorge/jocaptcha",
      open: "",
      image: "/assets/projects/jocaptcha/jocaptcha.png"
    }
  };

  const projects = {
    "Let's Cook Together": {
      desc: "A Flutter-based Focus Clock and Pomodoro Timer with immersive full-screen design, gesture controls (tap/double-tap/long-press), wake lock support, and audio notifications for distraction-free productivity sessions.",
      techStack: "Flutter, Dart, Audio Players, Wakelock Plus",
      link: "https://github.com/ShaijoGeorge/letscooktogether",
      open: ""
    },
    "StudentAttendance": {
      desc: "Face recognition-based attendance system using OpenCV LBPH algorithm and Flask. Features role-based access for admins, staff, and students with automated attendance marking via camera, leave management, and MySQL database.",
      techStack: "Python, Flask, OpenCV, MySQL, Haar Cascade",
      link: "#",
      open: ""
    },
  };

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">/ projects</span>
      </div>
      
      <Carousel className="projects-carousel">
        {Object.keys(spotlightProjects).map((key, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={spotlightProjects[key]["image"]}
              alt={key}
            />
            <div className="caption-bg">
              <Carousel.Caption>
                <h3>{spotlightProjects[key]["title"]}</h3>
                <p>
                  {spotlightProjects[key]["desc"]}
                </p>
                <p className="techStack">
                  {spotlightProjects[key]["techStack"]}
                </p>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                />
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={i} delay={`${i + 1}00ms`}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                  </div>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                    openLink={projects[key]["open"]}
                  />
                </div>
                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key]["desc"]}</div>
                <div className="card-tech">{projects[key]["techStack"]}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;