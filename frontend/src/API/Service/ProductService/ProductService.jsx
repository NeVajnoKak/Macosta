import axios from "axios"
const PRODUCT_REST_API_URL = 'http://127.0.0.1:8000/api/product/'

class ProductService {
  getProduct(){
    return axios.get(PRODUCT_REST_API_URL)
  }
  getProductById(id){
    return axios.get(`${PRODUCT_REST_API_URL}${id}/`)
  }
}

export default new ProductService()