import "./App.css";
import react from "react";
import Cortado from "./Cortado.png";

function App() {
  return (
    <div className="App">
      <div className="Top-boarder"></div>
      <div className="thing">
        <div className="longLine"></div>
        <div className="line"></div>
      </div>
      <div className="App-header">
        <div className="verticleLine"></div>
        <div className="column">
          <div>COFFEE</div>
          <div>CORNER</div>
        </div>
        <div className="break"></div>
        <div className="NavBar">
          <div className="NavItem">MENU</div>
          <div className="NavItem">LOCATIONS</div>
          <div className="NavItem">ABOUT US</div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="bigText">Caffeinate your day.</div>
          <div className="bigText">Sustainibly sourced. Sustainibly priced</div>
        </div>
        <img src={Cortado} alt="Coffee" />;
      </div>
    </div>
  );
}

export default App;
