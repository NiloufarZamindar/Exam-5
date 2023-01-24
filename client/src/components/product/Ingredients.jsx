import React from "react";
import { useSelector } from "react-redux";

const Ingredients = ({ children }) => {
  const { bowl } = useSelector((state) => state.currentOrder);

  return (
    <div className="product-materials">
      <div
        className="product-mtrl-title"
        style={{
          backgroundColor: "rgb(242, 242, 242)",
          boxShadow: "0 0 3px #c1c1c1",
          color: "#e33d35",
        }}
      >
        <span>Choose a poke Ingredients</span>
      </div>
      <div className="product-mtrl-content">
        <span>{children}</span>
        <span className="chosen-text">
          Tip: you can choose just {bowl.ingredients} of ingredients for regular
          bowl.more than this amount will increase the price of the bowl by 20%.
        </span>
      </div>
    </div>
  );
};

export default Ingredients;
