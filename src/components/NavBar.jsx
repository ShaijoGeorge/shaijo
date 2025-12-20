import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <Navbar fixed="top" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#intro">Shaijo George</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#intro">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="mailto:shaijokuttikkatt@gmail.com">
              <EmailRoundedIcon style={{ fontSize: 20 }} />
            </Nav.Link>
            <Nav.Link href="https://github.com/ShaijoGeorge" target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={{ fontSize: 19 }} />
            </Nav.Link>
            <Nav.Link href="https://linkedin.com/in/shaijogeorge" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={{ fontSize: 21 }} />
            </Nav.Link>
            <Nav.Link href="https://medium.com/@shaijokuttikkatt" target="_blank" rel="noopener noreferrer">
              <ArticleIcon style={{ fontSize: 20 }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;