import axios from "axios"
const CART_REST_API_URL = 'http://127.0.0.1:8000/api/cart/'

class CartService {
    getCartItem(){
        return axios.get(CART_REST_API_URL)
    }
  addToCart = async (formData) => {
    try {
      const response = await axios.post(`${CART_REST_API_URL}add`, formData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to add product to cart: ' + error.message);
    }
  }
  getCartCount() {
    return axios.get(`${CART_REST_API_URL}count`);
  }
  deleteCartItem(id){
    return axios.delete(`${CART_REST_API_URL}${id}`)
  }
  
}

export default new CartService()