import "./NavBar.css";
//import react from "react";
import react, { useState, useEffect } from "react";
import NavItem from "./NavItem";

function NavBar() {
  const [lineWidth, setLineWidth] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  const navLineWidth1 = 0;

  useEffect(() => {
    setLineWidth(80);
    setLineHeight(74);
  }, []);

  return (
    <div>
      <div className="Top-boarder"></div>
      <div className="topLogo">
        <div className="longLine"></div>
        <div className="line" style={{ width: lineWidth }}></div>
      </div>
      <div className="App-header">
        <div className="verticleLine" style={{ height: lineHeight }}></div>
        <div className="column">
          <div>COFFEE</div>
          <div>CORNER</div>
        </div>
        <div className="break"></div>
        <div className="NavBar">
          <NavItem text="MENU" />
          <NavItem text="LOCATIONS" />
          <NavItem text="ABOUT US" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
