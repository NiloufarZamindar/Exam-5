import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InModal from "./InModal";
import {
  appendIngredient,
  removeIngredient,
  setPrice,
} from "../../Redux/features/product/currentOrderSlice";
import { Toast } from "../../utils/Toast";

const Ingredient = ({ name }) => {
  const [modalShow, setModalShow] = useState(false);
  const { bowl, ingredients, price } = useSelector(
    (state) => state.currentOrder
  );
  const server = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();
  const [element, setElement] = useState();
  const handleClose = () => {
    element.closest(".material-box").classList.remove("active");
    dispatch(removeIngredient(name));
    setModalShow(false);
  };
  const handleAppend = () => {
    let morePercent = (parseFloat(bowl.price) * 20) / 100;
    dispatch(setPrice((parseFloat(price) + morePercent).toFixed(2)));
    Toast("Bowl price 20% increased");
    setModalShow(false);
  };
  const checkHandler = (el) => {
    el.target.closest(".material-box").classList.toggle("active");
    setElement(el.target);
    const checkActive = el.target
      .closest(".material-box")
      .classList.contains("active");
    if (checkActive) {
      dispatch(appendIngredient(name));
      if (ingredients.length >= bowl.ingredients) {
        setModalShow(true);
        return;
      }
    } else {
      let moreIngredients = ingredients.length - 1 - bowl.ingredients;
      if (moreIngredients === 0) {
        dispatch(setPrice(parseFloat(bowl.price).toFixed(2)));
      } else if (moreIngredients > 0) {
        let morePercent = (parseFloat(bowl.price) * 20) / 100;
        dispatch(
          setPrice(parseFloat(bowl.price) + moreIngredients * morePercent)
        );
      }
      dispatch(removeIngredient(name));
    }
  };
  return (
    <>
      <InModal
        show={modalShow}
        handleClose={handleClose}
        handleAppend={handleAppend}
      />
      <div
        className="material-box"
        onClick={checkHandler}
        style={{ minWidth: "140px" }}
      >
        <span>
          <img src={`${server}/images/poke/ingredients/${name}.png`} alt="" />
        </span>
        <span className="mtrl-name" style={{ color: "#e6ba11" }}>
          {name}
        </span>
      </div>
    </>
  );
};

export default Ingredient;
