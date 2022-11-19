const express = require('express');

const cartController = require('../controllers/cartController.js');
const productController = require('../controllers/prodcutController.js');


const router = express.Router();

router.get('/all',
  productController.getAllProducts,
  (req, res) => res.status(200).json(res.locals.all)
);

router.get('/cart',
  cartController.getCart,
  (req, res) => res.status(200).json(res.locals.cart)
);

router.post('/cart', 
  cartController.addToCart,
  (req, res) => res.status(200).json(res.locals.cart)
);

router.post('/addProduct',
  productController.createProduct,
  (req, res) => res.status(200).send(res.locals.createdProduct)
);

router.delete('/cart',
  cartController.deleteItem,
  (req, res) => res.status(200).send(res.locals.deleteResult)
);
/*
router.delete('/',
  methodController.deleteMethod,
  (req, res) => res.status(200).send(res.locals.deleteResult)
);
*/






module.exports = router;