import React from "react";
import CTAButton from "./CTAButton";

interface IFeaturedItem {
  imageUrl: string;
  altText: string;
  headline: string;
  description?: string;
  cta: string;
  ctaLink: string;
  key: string;
}

const FeaturedItem = ({
  imageUrl,
  altText,
  headline,
  description,
  cta,
  ctaLink,
  key,
}: IFeaturedItem) => {
  return (
    <div className="featuredItem" id={key}>
      <img src={imageUrl} alt={altText} className="featured--image" />
      <h3 className="featured--headline">{headline}</h3>
      {description && <p className="featured--bodyText">{description}</p>}
      <CTAButton text={cta} url={ctaLink} />
    </div>
  );
};

export default FeaturedItem;
