import "./App.css";
import "./styles/Global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import GeometricAnimation from "./components/GeometricAnimation";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ paddingTop: "100px" }}>
        <GeometricAnimation />
        <h1>My Portfolio</h1>
        <p>Animated geometry is working!</p>
      </div>
    </div>
  );
}

export default App;