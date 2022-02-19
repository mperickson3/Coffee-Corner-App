import "./aboutOurCoffee.css";
import Statement from "./statement";

function AboutOurCoffee() {
  return (
    <div>
      <div className="greyBox">
        <div className="rowStatement">
          <Statement
            statementText="Our loyalty and prepayment schemes make ours the most affordable
              high-end coffee going"
            statementTitle="AFFORDABLE"
          />
          <Statement
            statementText="Bulletproof We sell a range of supercharged speciality coffees.
            They'll get you through even the toughest day' work!"
            statementTitle="BULLETPROOF"
          />
          <Statement
            statementText="Ethically sourced We trade fairly with our suppliers, and invest
            in carbon offsetting."
            statementTitle="ETHICALLY SOURCED"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutOurCoffee;
