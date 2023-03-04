const {
  getAllProductsDb,
  createProductDb,
  getProductDb,
  updateProductDb,
  deleteProductDb,
  getProductByNameDb,
  getProductBySearchStrDb,
  getProductsByCategoryDb,
} = require("../db/product.db");
const { ErrorHandler } = require("../helpers/error");

class ProductService {

  getAllProducts = async (page) => {
    console.log("Inside get all products")
    const limit = 12;
    const offset = (page - 1) * limit;
    try {
      return await getAllProductsDb({ limit, offset });
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getProductBySearchStr = async (searchStr, page) => {
    console.log("Inside get all ProductBySearchStr :: " + searchStr);
    const limit = 12;
    const offset = (page - 1) * limit;
    try {
      return await getProductBySearchStrDb({searchStr, limit, offset});
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getProductsByCategory = async (category , page) => {
    console.log("Inside get all  ProductsByCategory:: " + category);
    const limit = 12;
    const offset = (page - 1) * limit;
    try {
      return await getProductsByCategoryDb({category , limit, offset});
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  addProduct = async (data) => {
    try {
      return await createProductDb(data);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getProductById = async (id) => {
    try {
      const product = await getProductDb(id);
      if (!product) {
        throw new ErrorHandler(404, "product not found");
      }
      return product;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getProductByName = async (name) => {
    try {
      const product = await getProductByNameDb(name);
      if (!product) {
        throw new ErrorHandler(404, "product not found");
      }
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  updateProduct = async (data) => {
    try {
      const product = await getProductDb(data.id);
      if (!product) {
        throw new ErrorHandler(404, "product not found");
      }
      return await updateProductDb(data);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  removeProduct = async (id) => {
    try {
      const product = await getProductDb(id);
      if (!product) {
        throw new ErrorHandler(404, "product not found");
      }
      return await deleteProductDb(id);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
}

module.exports = new ProductService();
