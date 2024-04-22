import React, { useState } from "react";

export default function LightDimmer() {
  const [light, setLight] = useState(0);
  const dimLight = (event) => {
    setLight(event.target.value);
    document.body.style.backgroundColor = `rgba(0, 0, 0, ${light}%)`;
  };

  return (
    <div>
      <input
        id="dimmer"
        type="range"
        defaultValue="0"
        onChange={dimLight}
      />
      <label htmlFor="dimmer">Dimmer</label>
    </div>
  );
}
