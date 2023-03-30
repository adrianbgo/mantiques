import React from "react";
import { Link } from "react-router-dom";

interface ICTAButton {
  text: string;
  url: string;
}

const CTAButton = ({ text, url }: ICTAButton) => {
  return (
    <Link to={url} className="cta-button">
      {text}
    </Link>
  );
};

export default CTAButton;
