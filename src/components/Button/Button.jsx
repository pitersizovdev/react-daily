import { React, useState } from "react";
import "./button.css";

const Button = () => {
  const [text, setText] = useState("Save");

  const clicked = () => {
    setText("Close");
  };

  return (
    <button onClick={clicked} className="button accent">
      {text}
    </button>
  );
};

export default Button;
