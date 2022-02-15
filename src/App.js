import "./App.css";
import NavBar from "./components/NavBar";
import GetCoffee from "./components/getCoffee";
import AboutOurCoffee from "./components/aboutOurCoffee";

function App() {
  return (
    <div className="App">
      <NavBar />

      <GetCoffee></GetCoffee>
      <AboutOurCoffee />
      <div className="bottom-border"></div>
    </div>
  );
}

export default App;
