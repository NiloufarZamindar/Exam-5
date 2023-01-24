import React, { useEffect, useRef, useState } from "react";

import { v4 as uuid } from "uuid";

import ProductLoader from "../components/loaders/ProductLoader";
import Proteins from "../components/product/Proteins";
import Protein from "../components/product/Protein";
import Ingredient from "../components/product/Ingredient";
import Ingredients from "../components/product/Ingredients";

/*===Images===*/
import psm2 from "../assets/img/poke/psm2.jpg";
import psm3 from "../assets/img/poke/psm3.jpg";
import psm4 from "../assets/img/poke/psm4.jpg";

import { fetchBowlById } from "../services/bowlServices";
import { useParams } from "react-router";
import { Toast } from "../utils/Toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initialCurrent } from "../Redux/features/product/currentOrderSlice";
import { isAuth } from "./../common/isAuth";
import { appendProduct } from "../Redux/features/product/cartSlice";

const ProductInfo = () => {
  const firstSlideImg = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { bowl, price, proteins, ingredients } = useSelector(
    (state) => state.currentOrder
  );

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [orderCount, setOrderCount] = useState(1);
  const server = process.env.REACT_APP_SERVER_URL;
  let imgId = 1;
  function slideImage(imgId) {
    const displayWidth = firstSlideImg.current.clientWidth;
    document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }

  const addTCartHandler = () => {
    if (!isAuth()) {
      Toast("Validity has expired. Please login again", "error");
      return;
    }
    let prList = [...proteins];
    let inList = [...ingredients];
    if (parseInt(orderCount) <= 0) {
      setOrderCount(1);
    }
    if (prList.length <= 0) {
      Toast("Please select at least one protein", "error");
      return;
    }
    if (inList.length <= 0) {
      Toast("Please select at least one ingredient", "error");
      return;
    }
    let _currentOrder = {
      id: uuid(),
      count: parseInt(orderCount),
      order: {
        bowl,
        proteins: prList.sort(),
        ingredients: inList.sort(),
        price: parseFloat((price * parseInt(orderCount)).toFixed(2)),
      },
    };
    dispatch(appendProduct(_currentOrder));
    Toast("Order added to the cart!", "success");
  };
  const slideHandler = (event) => {
    event.preventDefault();
    imgId = event.target.closest("a").dataset.id;
    slideImage(imgId);
  };
  const pageBackHandler = () => {
    navigate("/product", { replace: true });
  };
  useEffect(() => {
    fetchBowlById(id)
      .then(({ data }) => {
        dispatch(initialCurrent(data));
        setTimeout(() => {
          setIsLoading(true);
        }, 1000);
      })
      .catch((e) => {
        Toast(e.message, "error");
      });
  }, [id, dispatch]);

  window.addEventListener("resize", slideImage);
  const productInfo = (
    <>
      <div className="content-wrap">
        <div className="card-wrapper">
          <div className="card">
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  <img
                    ref={firstSlideImg}
                    src={`${server}/images/${(bowl.bowlName!==undefined) && bowl.bowlName.toLowerCase()}.jpg`}
                    alt="shoe"
                  />
                  <img src={psm2} alt="shoe" />
                  <img src={psm3} alt="shoe" />
                  <img src={psm4} alt="shoe" />
                </div>
              </div>
              <div className="img-select">
                <div className="img-item">
                  <a href="/#" data-id="1" onClick={slideHandler}>
                    <img
                      src={`${server}/images/${(bowl.bowlName!==undefined) && bowl.bowlName.toLowerCase()}.jpg`}
                      alt="shoe"
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="/#" data-id="2">
                    <img src={psm2} alt="shoe" onClick={slideHandler} />
                  </a>
                </div>
                <div className="img-item">
                  <a href="/#" data-id="3">
                    <img src={psm3} alt="shoe" onClick={slideHandler} />
                  </a>
                </div>
                <div className="img-item">
                  <a href="/#" data-id="4">
                    <img src={psm4} alt="shoe" onClick={slideHandler} />
                  </a>
                </div>
              </div>
            </div>
            <div className="product-content">
              <h2 className="product-title" style={{ width: "500px" }}>
                {bowl.bowlName} Bowl
              </h2>
              <div className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>

              <div className="product-price">
                <p className="new-price">
                  Bwol Price: <span>{price}€</span>
                </p>
              </div>
              {isAuth() ? (
                <div className="purchase-info">
                  <input
                    type="number"
                    min="1"
                    value={orderCount}
                    onChange={(e) => setOrderCount(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn"
                    onClick={addTCartHandler}
                  >
                    Add to Cart <i className="fa fa-shopping-cart"></i>
                  </button>
                  <button type="button" className="btn">
                    Compare
                  </button>
                </div>
              ) : (
                <div className="purchase-info">
                  <h5
                    style={{
                      textAlign: "center",
                      backgroundColor: "#bbb",
                      color: "white",
                    }}
                  >
                    Login first to buy/
                    <Link to="/login">Login</Link>
                  </h5>
                </div>
              )}
              <Proteins>
                <Protein name="tuna" />
                <Protein name="chicken" />
                <Protein name="salmon" />
                <Protein name="tofu" />
              </Proteins>
            </div>
          </div>
        </div>
      </div>
      <div className="product-detail">
        <Ingredients>
          <Ingredient name="avocado" />
          <Ingredient name="carrots" />
          <Ingredient name="mango" />
          <Ingredient name="kale" />
          <Ingredient name="corn" />
          <Ingredient name="wakame" />
          <Ingredient name="ananas" />
          <Ingredient name="tomatoes" />
          <Ingredient name="salad" />
          <Ingredient name="peppers" />
          <Ingredient name="cashew" />
        </Ingredients>
        <br />
        <h2>{bowl.bowlName} Poke Bowl: </h2>
        <p>
          Poke is diced raw fish served either as an appetizer or a main course
          and is a popular dish in Hawaii. Traditional forms are aku and heʻe.
          Heʻe poke is sometimes called tako poke in places where the Hawaiian
          language is not spoken.
        </p>
        <p>
          Poke is diced raw fish served either as an appetizer or a main course
          and is a popular dish in Hawaii. Traditional forms are aku and heʻe.
          Heʻe poke is sometimes called tako poke in places where the Hawaiian
          language is not spoken.
        </p>
        <ul>
          <li>
            Available: <span>in stock</span>
          </li>
          <li>
            Category: <span>pokes</span>
          </li>
          <li>
            Shipping Area: <span>All over the world</span>
          </li>
          <li>
            Shipping Fee: <span>Free</span>
          </li>
        </ul>
        <br />
      </div>
    </>
  );
  return (
    <>
      <div className="content-box">
        <div className="page-back" onClick={pageBackHandler}>
          <span>
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          </span>
        </div>
        {!isLoading ? <ProductLoader /> : productInfo}
      </div>
    </>
  );
};

export default ProductInfo;
