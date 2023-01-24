import React from "react";
import OrderProduct from "./../components/product/OrderProduct";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addOrder } from "./../services/orderServices";
import { Toast } from "./../utils/Toast";
import { isAuth } from "./../common/isAuth";
import { initialCart } from "../Redux/features/product/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, totalPrice, totalCount } = useSelector(
    (state) => state.cart
  );

  const handleCheckout = () => {
    const finalPrice = totalCount > 4
      ? (totalPrice - parseFloat(totalPrice * (10 / 100))).toFixed(2)
      : totalPrice;
    addOrder({ userId: isAuth("id"), products, finalPrice, totalCount })
      .then(() => {
        Toast("Order was successfully placed", "success");
        dispatch(initialCart());
        navigate("/product");
      })
      .catch(({ response }) => {
        Toast(response.data, "error");
      });
  };

  const productsList = products.map((product) => (
    <OrderProduct key={product.id.toString()} product={product} />
  ));
  const emptyCart = (
    <div className="content-box">
      <p style={{ padding: "20px" }}>
        Cart is Empty|<Link to="/product">Add Product</Link>
      </p>
    </div>
  );

  return (
    <>
      <section id="cart">
        {productsList.length ? productsList : emptyCart}
        {productsList.length ? (
          <footer id="order-footer">
            <div className="container clearfix">
              <div className="left">
                <h2 className="subtotal">
                  Price: <span>{totalPrice.toFixed(2)}</span>€
                </h2>
                <h3 className="tax">
                  Discount ({totalCount > 4 ? "10%" : "0%"}):
                  <span>
                    {totalCount > 4
                      ? parseFloat(totalPrice * (10 / 100)).toFixed(2)
                      : "0"}
                  </span>
                  €
                </h3>
              </div>

              <div className="right">
                <h1 className="total">
                  Total:
                  <span>
                    {totalCount > 4
                      ? (
                          totalPrice - parseFloat(totalPrice * (10 / 100))
                        ).toFixed(2)
                      : totalPrice}
                  </span>
                  €
                </h1>
                <button className="btn" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </footer>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default Cart;
