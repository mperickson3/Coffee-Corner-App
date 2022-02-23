import "./newsletter.css";
import logoSmall from "./logoSmall.png";
import CoffeeCorners from "./coffeecorner.png";

function Newsletter() {
  return (
    <div>
      <div className="repeatCoffeeBox">
        <img src={CoffeeCorners} alt="coffee corners"></img>
        {/* coffee corner coffee corner coffee corner coffee corner coffee corner
        coff ffee corner coffee corner coffee corner coffee corner coffee corner
        coffee corner coffee ee corner coffee corner coffee corner coffee corner
        coffee corner coffee corner coffee co corner coffee corner coffee corner
        coffee corner coffee corner coffee corner coffee cor orner coffee corner
        coffee corner coffee corner coffee corner coffee corner coffee corne ner
        coffee corner coffee corner coffee corner coffee corner coffee corner
        coffee corner r coffee corner coffee corner coffee corner coffee corner
        coffee corner coffee corner c coffee corne */}
      </div>
      <div className="newsletterBox">
        <div className="newsLetterLogo">
          <img src={logoSmall} alt="logoSmall"></img> newsletter
        </div>
        <div className="newsLine" />
        <div className="newsText">
          {"Keep up-to-date with what's brewing at Coffee Corner."}
        </div>
        <div className="newsText">
          Get a free coffee in-store when you sign up for our newsletter!
        </div>

        <input type="text" className="email"></input>
        <button className="signUp">sign up</button>
        <div className="unsubscribe">You can unsubscribe any time.</div>
      </div>
    </div>
  );
}

export default Newsletter;
