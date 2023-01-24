import React, { useState, useEffect } from "react";
import Order from "../components/orders/Order";
import OrdersLoader from "./../components/loaders/OrdersLoader";
import { useDispatch } from "react-redux";
import { setOrders } from "../Redux/features/product/orderSlice";
import { isAuth } from "./../common/isAuth";
import { useSelector } from "react-redux";
import { fetchOrders } from "../services/orderServices";
import { Toast } from "./../utils/Toast";

const Orders = () => {
  const [isLoadOrders, setLoadOrders] = useState(true);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchOrders({ userId: isAuth("id") })
      .then(({ data }) => {
        dispatch(setOrders(data));
        setTimeout(() => {
          setLoadOrders(false);
        }, 1000);
      })
      .catch(({ response }) => {
        Toast(response.data, "error");
        setLoadOrders(false);
      });
  }, [dispatch]);

  let orderList = orders.map((order) => {
    return <Order
      totalPrice={order.totalPrice}
      totalCount={order.totalCount}
      name={order.products[0].order.bowl.bowlName}
      id={order.id}
      key={order.id}
    />;
  });

  const ordersContainer = (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Order</th>
            <th>Total Price</th>
            <th>Total Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{orderList}</tbody>
      </table>
    </div>
  );
  return (
    <section className="orders-content">
      {isLoadOrders ? <OrdersLoader /> : ordersContainer}
    </section>
  );
};

export default Orders;
