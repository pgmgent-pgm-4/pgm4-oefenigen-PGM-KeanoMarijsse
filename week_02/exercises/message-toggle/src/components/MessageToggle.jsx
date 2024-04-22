import React, { useState } from "react";

export default function MessageToggle() {
  const [message, showMessage] = useState(false);
  const toggleMessage = () => {
    showMessage(!message);
  };
  return (
    <div>
      <button onClick={toggleMessage}>Toggle</button>
      {message && <div>Message</div>}
    </div>
  );
}
