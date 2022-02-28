import "./contactUs.css";

import facebook from "./facebook.png";
import insta from "./instaP.png";
import ticktock from "./ticktock.png";

function ContactUs() {
  return (
    <div className="bottom-border">
      <div className="contactUs">
        CONTACT US
        <div>
          <img src={facebook} alt="facebook" className="logos" />
          <img src={insta} alt="Inst" className="logos" />
          <img src={ticktock} alt="ticktock" className="logos" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
