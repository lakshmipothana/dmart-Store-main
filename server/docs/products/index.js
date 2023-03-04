const getProduct = require("./getProduct");
const getProducts = require("./getProducts");
const getProductsBySearchStr = require("./getProductsBySearchStr");
const getProductsByCategory = require("./getProductsByCategory");
const createProduct = require("./createProduct");
const updateProduct = require("./updateProduct");
const deleteProduct = require("./deleteProduct");


module.exports = {
  "/products": {
    ...getProducts,    
    ...createProduct,
    ...createProduct,
  },
  "/products/{id}": {
    ...getProduct,
    ...updateProduct,
    ...deleteProduct,
  },
  "/products/searchStr/{searchStr}" : {
    ...getProductsBySearchStr
  },
  "/products/category/{category}" : {
    ...getProductsByCategory
  },
};
