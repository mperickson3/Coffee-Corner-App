import "./bulletproofLogo.css";
import { useState, useEffect } from "react";
function BulletproofLogo() {
  const [visibility, setVisibility] = useState("transparent");

  useEffect(() => {
    setVisibility("white");
    console.log(visibility);
  }, []);

  return (
    <div className="logoContainer">
      <div
        className="checkMarkTop"
        style={{
          backgroundColor: visibility,
        }}
      />
      <div
        className="checkMarkBottom"
        style={{
          backgroundColor: visibility,
        }}
      />
    </div>
  );
}

export default BulletproofLogo;
