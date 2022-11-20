const db = require('../db.js');

const CartController = {

  async getCart(req, res, next) {
    try {
      //CALL SELECT * FROM ORDER_ITEMS
      const result = await db.query();
      res.locals.cart = cart;
      return next();
    } catch {
      return next(
        {
          log: 'Express error handler caught a middleware error in getMethod',
          status: 500,
          message: { err: 'An error occurred in getCart' }
        }
      );
    }
  },

  async addToCart(req, res, next) {
    try {
      all = await Method.find();
      res.locals.all = all;
      return next();
    } catch {
      return next(
        {
          log: 'Express error handler caught a middleware error in getMethod',
          status: 500,
          message: { err: 'An error occurred in addToCart' }
        }
      );
    }
  },

  async deleteItem(req, res, next) {
    try {
      //DELETE [request body] FROM ORDER ITEMS
      res.locals.all = all;
      return next();
    } catch {
      return next(
        {
          log: 'Express error handler caught a middleware error in getMethod',
          status: 500,
          message: { err: 'An error occurred in deleteItem' }
        }
      );
    }
  },
};

module.exports = CartController;