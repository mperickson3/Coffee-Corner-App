import "./NavBar.css";
//import react from "react";

function NavBar() {
  return (
    <div>
      <div className="Top-boarder"></div>
      <div className="topLogo">
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
    </div>
  );
}

export default NavBar;
