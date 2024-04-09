import React from "react";
import "./cardButton.css";

const CardButton = ({ children }) => {
  return <button className="card-button">{children}</button>;
};

export default CardButton;
