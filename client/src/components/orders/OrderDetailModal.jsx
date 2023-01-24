import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const OrderDetailModal = ({ show, handleClose, order_id }) => {
  const server = process.env.REACT_APP_SERVER_URL;
  const { orders } = useSelector((state) => state.order);
  const order = orders.find((order) => order.id === order_id);
  const orderProducts = order.products.map((product, key) => {
    return (
      <div  key={product.id}>
        <Card className="text-center">
          <Card.Header>
            <span className="product-number">#{key + 1}</span>
            {product.order.bowl.bowlName} Bowl
          </Card.Header>
          <Card.Body>
            <div className="order-detail-content">
              <img
                src={`${server}/images/${product.order.bowl.bowlName.toLowerCase()}.jpg`}
                className="order-detail-img"
                alt="order Img"
              />
              <div className="product-elements">
                <Card.Text>
                  Proteins: {product.order.proteins.join(",")}
                </Card.Text>
                <Card.Text>
                  Ingredient: {product.order.ingredients.join(",")}
                </Card.Text>
              </div>
            </div>
          </Card.Body>
          <Card.Footer className="text-muted">
            <div>
              <span className="foot-detail">Count: {product.count}</span>
              <span className="foot-detail">Price: {product.order.price}€</span>
            </div>
          </Card.Footer>
        </Card>
        <br />
      </div>
    );
  });
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header>
        <Modal.Title>Order Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>{orderProducts}</Modal.Body>
      <Modal.Footer>
        <div className="order-total-cp">
          <span className="foot-detail">Total Count: {order.totalCount}</span>
          <span className="foot-detail">
            Total Price:{" "}
            <h6>{order.totalCount > 4 ? "(10%Discount)" : "(0%Discount)"}</h6>{" "}
            {order.totalPrice}€
          </span>
        </div>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderDetailModal;
