import React from "react";

interface IFeaturedItem {
  imageUrl?: string;
  altText?: string;
  headline: string;
  description?: string;
  cta: string;
}

const FeaturedItem = ({
  imageUrl,
  altText,
  headline,
  description,
  cta,
}: IFeaturedItem) => {
  return (
    <div className="featuredItem">
      {imageUrl && altText && (
        <img src={imageUrl} alt={altText} className="featured--image" />
      )}
      <h3 className="featured--headline">{headline}</h3>
      {description && <p className="featured--bodyText">{description}</p>}
      <button className="featured--cta">{cta}</button>
    </div>
  );
};

export default FeaturedItem;
