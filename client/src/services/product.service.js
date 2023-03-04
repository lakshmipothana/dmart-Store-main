import API from "api/axios.config";

class ProductService {
  getProducts(page) {
    return API.get(`/products/?page=${page}`);
  }
  getProduct(id) {
    return API.get(`/products/${id}`);
  }
  getProductByName(name) {
    return API.get(`/products/${name}`);
  }
  getProductBySearchStr(searchStr) {
    return API.get(`/products/searchStr/${searchStr}`);
  }
  getProductByCategory(category) {
    return API.get(`/products/category/${category}`);
  }
}

export default new ProductService();
