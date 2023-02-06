import React from "react";

interface ICTAButton {
  text: string;
  url: string;
}

const CTAButton = ({ text, url }: ICTAButton) => {
  return (
    <a href={url} className="cta-button">
      {text}
    </a>
  );
};

export default CTAButton;
