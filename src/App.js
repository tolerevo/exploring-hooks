import React, { useState } from "react";

export default function Button() {
  const [buttonText, setButtonText] = useState("Click Me Please");

  return (
    <button onClick={() => setButtonText("Thanks, been clicked!")}>
      {buttonText}
    </button>
  );
}
