//return all the products
const db = require('../db.js');


const ProductController = {

  async getAllProducts(req, res, next) {
    try {
      const all = await db.query('SELECT * FROM product');
      res.locals.all = all.rows;
      return next();
    } catch {
      return next(
        {
          log: 'Express error handler caught a middleware error in getMethod',
          status: 500,
          message: { err: 'An error occurred in getAllProducts' }
        }
      );
    }
  },

  async createProduct(req, res, next) {
    try {
      //call database to INSERT [request body] INTO PRODUCTS
      res.locals.all = all;
      return next();
    } catch {
      return next(
        {
          log: 'Express error handler caught a middleware error in getMethod',
          status: 500,
          message: { err: 'An error occurred in getAllProducts' }
        }
      );
    }
  },
};

module.exports = ProductController;