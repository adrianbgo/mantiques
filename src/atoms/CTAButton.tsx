import React from "react";

interface ICTAButton {
  text: string;
  url: string;
}

const CTAButton = ({ text, url }: ICTAButton) => {
  return (
    <button onClick={() => (window.location.href = url)} className="cta-button">
      {text}
    </button>
  );
};

export default CTAButton;
