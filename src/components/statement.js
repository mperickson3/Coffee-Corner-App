import AffordableLogo from "./statementLogos/afordableLogo";
import "./statement.css";
import BulletproofLogo from "./statementLogos/bulletproofLogo";

function Statement(props) {
  const logoSelect = props.statementTitle;

  return (
    <div>
      <div className="statement">
        <div className="coolBox">
          {logoSelect === "AFFORDABLE" ? (
            <AffordableLogo />
          ) : logoSelect === "BULLETPROOF" ? (
            <BulletproofLogo />
          ) : (
            <div />
          )}
          {/* <AffordableLogo /> */}
          {/* {<BulletproofLogo />} */}
        </div>
        <div className="statementText">{props.statementTitle}</div>
        <div className="aboutText">{props.statementText}</div>
      </div>
    </div>
  );
}

export default Statement;
