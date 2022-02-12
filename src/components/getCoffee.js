import "./getCoffee.css";
//import react from "react";

import Cortado from "../Cortado.png";

import "./NavBar.css";
//import react from "react";
function hoverIn(event) {
  event.target.style.background = "#eeebeb";
}

function hoverOut(event) {
  event.target.style.background = "white";
}

function getCoffee() {
  return (
    <div>
      <div className="row">
        <div className="column">
          <div className="bigText">Caffeinate your day.</div>
          <div className="bigText">Sustainibly sourced. Sustainibly priced</div>

          <button
            className="Pretty-Button"
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            get a free coffee
          </button>
        </div>
        <img src={Cortado} alt="Coffee" className="Cortado" />
      </div>
    </div>
  );
}

export default getCoffee;
