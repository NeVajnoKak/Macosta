import axios from 'axios'
const CATEGORY_REST_API_URL = 'http://127.0.0.1:8000/api/category/'
const SUBCATEGORY_REST_API_URL = 'http://127.0.0.1:8000/api/subcategory/'

class CategoryService {
    getCategory(){
        return axios.get(CATEGORY_REST_API_URL)
    }
    getSubCategory(id){
        return axios.get(`${SUBCATEGORY_REST_API_URL}`)
    }
}
export default new CategoryService()