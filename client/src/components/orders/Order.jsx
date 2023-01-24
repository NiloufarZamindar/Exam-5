import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrderDetailModal from "./OrderDetailModal";

const Order = ({ totalPrice, totalCount, name,id }) => {
  const [showMenu, showToggle] = useState();
  const [showModal, setShowModal] = useState(false);
  const server = process.env.REACT_APP_SERVER_URL;
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <OrderDetailModal show={showModal} handleClose={handleClose} order_id={id}/>
      <tr>
        <td>
          <div className="order-info">
            <div className="order-info__img">
              <img src={`${server}/images/${name.toLowerCase()}.png`} alt="order Img" />
            </div>
          </div>
        </td>
        <td>
          {totalPrice} <i className="fa fa-eur"></i>
        </td>
        <td>{totalCount}</td>
        <td>
          <div className="dropdown open" onClick={() => showToggle(!showMenu)}>
            <Link className="px-2">
              <i className="fa fa-ellipsis-v"></i>
            </Link>
            {showMenu ? (
              <div className="dropdown-order">
                <span
                  className="order-dropdown-item"
                  onClick={()=>setShowModal(true)}
                >
                  <i className="fa fa-cubes mr-1" aria-hidden="true"></i> Show
                  detail
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </td>
      </tr>
    </>
  );
};

export default Order;
