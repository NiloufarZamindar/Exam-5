const Bowl = require("../models/bowl");
const Order = require("../models/order");
var _ = require("lodash");
const addOrder = async (req, res, next) => {
  const { userId, products, finalPrice, totalCount } = req.body;
  try {
    const bowls = await Bowl.findAll();
    let bowlsCount = {};
    let countError = false;
    bowls.forEach((bowl) => {
      bowlsCount[bowl.bowlName] = _.sumBy(products, (product) => {
        return product.order.bowl.id === bowl.id ? product.count : 0;
      });
    });
    console.log(bowlsCount)
    bowls.forEach((bowl) => {
      if (bowlsCount[bowl.bowlName] > bowl.stock) {
        let error = new Error(
          `Not enough stock for ${bowl.bowlName} bowl. stock = ${bowl.stock}`
        );
        error.statusCode = 409;
        countError = true;
        return next(error);
      }
    });
    if(countError==true){
      return;
    }
    bowls.map((bowl) => {
      return (bowl.stock = bowl.stock - bowlsCount[bowl.bowlName]);
    });
    bowls.forEach(async (bowl) => {
      await Bowl.update(
        { stock: bowl.stock },
        { where: { id: bowl.id } }
      );
    });

    const newOrder = await Order.create({
      userId,
      products: JSON.stringify(products),
      totalPrice: finalPrice,
      totalCount,
    });
    return res.json(newOrder);
  } catch (err) {
    next(err);
  }
};
const fetchOrders = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const orders = await Order.findAll({
      where: {
        userId,
      },
    });
    orders.map((order) => {
      return (order.products = JSON.parse(order.products));
    });
    return res.json(orders);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addOrder,
  fetchOrders,
};
