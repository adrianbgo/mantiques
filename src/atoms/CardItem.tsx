import React from "react";
import CTAButton from "./CTAButton";

interface ICardItem {
  name: string;
  title?: string;
  imgurl: string;
  description?: string;
  cta?: string;
  ctalink?: string;
  key: string;
}

const CardItem = ({
  name,
  title,
  imgurl,
  description,
  cta,
  ctalink,
  key,
}: ICardItem) => {
  return (
    <div className="card-item" id={key}>
      <img src={imgurl} alt={name} />
      <h3>{name}</h3>
      {title && <p>{title}</p>}
      {description && <p>{description}</p>}
      {cta && ctalink && <CTAButton text={cta} url={ctalink} />}
    </div>
  );
};

export default CardItem;
