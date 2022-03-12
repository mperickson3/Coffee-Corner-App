import "./Find.css";
import shop from "./shop.png";

function hoverIn(event) {
  event.target.style.background = "#eeebeb";
}

function hoverOut(event) {
  event.target.style.background = "white";
}

function Find() {
  return (
    <div className="findBox">
      <div className="findBranchBox">
        <div className="findTitle">FIND YOUR NEAREST BRANCH</div>
        <div className="findTimes">All our shops are open 7am-9pm</div>
        <div className="findTimes">We also do delivery!</div>
        <button
          className="Pretty-Button-2"
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          find a branch
        </button>
      </div>
      <img src={shop} alt="shop" className="shop" />
    </div>
  );
}

export default Find;
