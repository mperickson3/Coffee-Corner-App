import "./NavBar.css";
import react, { useState } from "react";
function NavItem(props) {
  const [navLineHeight, setNavLineHeight] = useState(0);
  const [navLineWidth, setNavLineWidth] = useState(0);

  function hoverInNavItem(event) {
    console.log(event.target.textContent);
    // event.target.parentElement.firstChild.style.height = 20;
    setNavLineWidth(20);
    setNavLineHeight(20);
  }

  function hoverOutNavItem(event) {
    setNavLineWidth(0);
    setNavLineHeight(0);
  }

  return (
    <div>
      <div
        className="NavItem"
        onMouseOver={hoverInNavItem}
        onMouseOut={hoverOutNavItem}
      >
        <div className="leftBorder" style={{ height: navLineHeight }} />
        <div className="topBorder" style={{ width: navLineWidth }} />
        <div className="navBarText">{props.text}</div>
      </div>
    </div>
  );
}

export default NavItem;
