import React from "react";
import FeaturedItem from "../atoms/FeaturedItem";

const Featured = () => {
  return (
    <div className="featured">
      <h2 id="title">Featured Products</h2>
      <FeaturedItem
        headline="Antique Secretary Desk"
        description="This beautifully restored antique secretary desk is the perfect additon to any home office."
        cta="Learn More"
        ctaLink="#"
        imageUrl="src\assets\pexels-bidvine-1249610.jpg"
        altText="Secretary Desk"
        key="itemA"
      />
      <FeaturedItem
        headline="Vintage Chest of Drawers"
        description="This vintage chest of drawers has been given new life with a fresh coat of paint."
        cta="Learn More"
        ctaLink="#"
        imageUrl="src\assets\pexels-bidvine-1249610.jpg"
        altText="Chest of Drawers"
        key="itemB"
      />
      <FeaturedItem
        headline="Upcycled Armchair"
        description="This comfortable armchair has been given a new lease on life with new upholstery and modern accents."
        cta="Learn More"
        ctaLink="#"
        imageUrl="src\assets\pexels-bidvine-1249610.jpg"
        altText="Upcycled Armchair"
        key="itemC"
      />
    </div>
  );
};

export default Featured;
