import React, { useState } from "react";

export default function ToggleLight() {
  const [light, setLight] = useState(false);
  const toggleLight = () => {
    setLight(!light);
    if (light) {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "black";
    }
  };
  return (
    <div>
      ToggleLight
      <button onClick={toggleLight}>Toggle</button>
    </div>
  );
}
