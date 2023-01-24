import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Toast } from '../../utils/Toast';
import { appendProtein,removeProtein } from "../../Redux/features/product/currentOrderSlice";

const Protein = ({ name }) => {
  const server = process.env.REACT_APP_SERVER_URL;

  const dispatch = useDispatch();
  const {bowl,proteins} = useSelector(state=>state.currentOrder);
  const checkHandler = (el) => {
    const checkActive = el.target
      .closest(".material-box")
      .classList.contains("active");
    if (!checkActive) {
      if (proteins.length >= bowl.proteins) {
        Toast(
          `you cant choose more than ${bowl.proteins} protein for ${bowl.bowlName} bowl!`,
          'error'
        );
        return;
      }
      dispatch(appendProtein(name))
    } else {
      dispatch(removeProtein(name))
    }
    el.target.closest(".material-box").classList.toggle("active");
  };
  return (
    <>
      <div className="material-box" onClick={checkHandler}>
        <span>
          <img src={`${server}/images/poke/proteins/${name}.png`} alt="" />
        </span>
        <span className="mtrl-name">{name}</span>
      </div>
    </>
  );
};

export default Protein;
