import React from "react";
import CardItem from "../atoms/CardItem";

const Featured = () => {
  return (
    <div className="featured">
      <h2 id="title">Featured Products</h2>
      <CardItem
        name="Antique Secretary Desk"
        description="This beautifully restored antique secretary desk is the perfect additon to any home office."
        cta="Learn More"
        ctalink="#"
        imgurl="../mantiques/assets/pexels-bidvine-1249610.jpg"
        key="itemA"
      />
      <CardItem
        name="Vintage Chest of Drawers"
        description="This vintage chest of drawers has been given new life with a fresh coat of paint."
        cta="Learn More"
        ctalink="#"
        imgurl="../mantiques/assets/pexels-bidvine-1249610.jpg"
        key="itemB"
      />
      <CardItem
        name="Upcycled Armchair"
        description="This comfortable armchair has been given a new lease on life with new upholstery and modern accents."
        cta="Learn More"
        ctalink="#"
        imgurl="../mantiques/assets/pexels-bidvine-1249610.jpg"
        key="itemC"
      />
    </div>
  );
};

export default Featured;
