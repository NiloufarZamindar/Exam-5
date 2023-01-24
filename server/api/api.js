const express = require('express');
const router = express.Router();

//Controllers
const userController = require('../controllers/userController');
const bowlController = require('../controllers/bowlController');
const orderController = require('../controllers/orderController');


//Bowls Api
router.post('/api/getBowls',bowlController.getBowls);
router.post('/api/getBowlById',bowlController.getBowlById);
router.get('/api/resetBowlsStock',bowlController.resetBowlsStock);


//Users Api
router.post('/api/signup',userController.signup);
router.post('/api/login',userController.login);

//orders Api
router.post('/api/addOrder',orderController.addOrder);
router.post('/api/fetchOrders',orderController.fetchOrders);

module.exports = router; 