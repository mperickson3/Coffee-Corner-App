import menuPic from "./menuPic.png";
import "./menu.css";

function hoverIn(event) {
  event.target.style.background = "#4b4b4b";
}

function hoverOut(event) {
  event.target.style.background = "black";
}

function Menu() {
  return (
    <div className="rows">
      <img src={menuPic} alt="Menu" className="Menu"></img>
      <div className="menuStatement">
        <div className="bigTextTwo">Check out our {"\n"} latest menu</div>
        <div className="bigTextTwo">
          Serving fresh {"\n"} brews {"\n"} brunches, {"\n"} and sandwiches
        </div>
        <div className="bigTextThin">all day, {"\n"} everyday.</div>
        <button
          className="Pretty-Button-Two"
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          view the menu
        </button>
      </div>
    </div>
  );
}

export default Menu;
