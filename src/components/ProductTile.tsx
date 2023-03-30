import React from "react";
import {
  FaRegStar,
  FaShoppingCart,
  FaStar,
  FaStarHalf,
  FaStarHalfAlt,
} from "react-icons/fa";

const ProductTile = () => {
  return (
    <div className="product-card">
      <div className="product-details">
        <h2>Test Product</h2>
        <span className="hint-star star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
        </span>
        <p className="information">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          facere non, voluptatum id molestias voluptates suscipit incidunt
          exercitationem, blanditiis explicabo, deserunt officiis nostrum
          recusandae quia? In impedit nisi enim vero?
        </p>
        <div className="control">
          <button className="btn">
            <span className="price">$48.00</span>
            <span className="shopping-cart">
              <FaShoppingCart />
            </span>
            <span className="buy">Buy Now</span>
          </button>
        </div>
      </div>
      <div className="product-image">
        <img
          src="https://sc01.alicdn.com/kf/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3/200006212/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3.jpg"
          alt="Omar Dsoky"
        />
        <div className="info">
          <h3>The Description</h3>
          <ul>
            <li>
              <strong>Original Product: </strong>Hat Box
            </li>
            <li>
              <strong>New Function: </strong>Flower Pot
            </li>
            <li>
              <strong>Finish: </strong>Wood
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
