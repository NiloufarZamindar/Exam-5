import React from "react";
import { useSelector } from "react-redux";

const Proteins = ({ children }) => {
  const { bowl } = useSelector((state) => state.currentOrder);
  return (
    <div className="product-materials">
      <div className="product-mtrl-title">
        <span>Choose a poke Proteins</span>
      </div>
      <div className="product-mtrl-content">
        <span>
          {children}
          <span className="chosen-text">
            Tip: you can choose just {`${bowl.proteins}`} of proteins for
            regular bowl.
          </span>
        </span>
      </div>
    </div>
  );
};

export default Proteins;
