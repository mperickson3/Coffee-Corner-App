import "./aboutOurCoffee.css";

function AboutOurCoffee() {
  return (
    <div>
      <div className="greyBox">
        <div className="rowStatement">
          <div className="statement">
            <div className="coolBox">
              <div className="affordableLogo"></div>
            </div>
            <div className="statementText">AFFORDABLE</div>
            <div className="aboutText">
              Our loyalty and prepayment schemes make ours the most affordable
              high-end coffee going
            </div>
          </div>
          <div className="statement">
            <div className="coolBox"></div>
            <div className="statementText">BULLETPROOF</div>
            <div className="aboutText">
              Bulletproof We sell a range of supercharged speciality coffees.
              They'll get you through even the toughest day' work!
            </div>
          </div>
          <div className="statement">
            <div className="coolBox"></div>
            <div className="statementText">ETHICALLY SOURCED</div>
            <div className="aboutText">
              Ethically sourced We trade fairly with our suppliers, and invest
              in carbon offsetting.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOurCoffee;
