import "./App.css";
import "./styles/Global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="content">
        <Intro />
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default App;