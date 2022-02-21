import { useState, useEffect } from "react";
import "./affordableLogo.css";

function AffordableLogo() {
  const [marginAnimateLeft, setMargineAnimateLeft] = useState(5);
  const [marginAnimateRight, setMargineAnimateRight] = useState(37);

  useEffect(() => {
    setMargineAnimateLeft(16);
    setMargineAnimateRight(26);
  }, []);

  return (
    <div className="logoContainer">
      <div
        className="affordableLogo"
        style={{ marginLeft: marginAnimateLeft }}
      />
      <div
        className="affordableLogo"
        style={{ marginLeft: marginAnimateRight }}
      />
      <div
        className="affordableLogo"
        style={{ marginLeft: marginAnimateLeft }}
      />
      <div
        className="affordableLogo"
        style={{ marginLeft: marginAnimateRight }}
      />
    </div>
  );
}

export default AffordableLogo;
