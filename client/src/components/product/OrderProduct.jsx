import React from "react";
import { useDispatch } from 'react-redux';
import { increaseCount,decreaseCount,removeProduct } from "../../Redux/features/product/cartSlice";

const OrderProduct = ({ product }) => {
  const server = process.env.REACT_APP_SERVER_URL;

  const dispath = useDispatch();
  const handleIncreaseCount = () => {
    dispath(increaseCount(product.id))
  };
  const handleDecreaseCount = () => {
    dispath(decreaseCount(product.id))
  };
  const handleRemoveProduct = () => {
    dispath(removeProduct(product.id))
  };
  return (
    <article className="product">
      <header>
          <img src={`${server}/images/${product.order.bowl.bowlName.toLowerCase()}.jpg`} alt="" />
      </header>

      <div className="content">
        <div className="remove-product" onClick={handleRemoveProduct}>
          <span>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </span>
        </div>
        <h1>{product.order.bowl.bowlName} Bowl</h1>
        <p>Proteins:  {product.order.proteins.join(',')}</p>
        <p>Ingredients:  {product.order.ingredients.join(',')}</p>
      </div>

      <footer className="content">
        <span className="qt-minus" onClick={handleDecreaseCount}>-</span>
        <span className="qt">{product.count}</span>
        <span className="qt-plus" onClick={handleIncreaseCount}>
          +
        </span>

        <h2 className="full-price">{product.order.price}€</h2>
      </footer>
    </article>
  );
};

export default OrderProduct;
