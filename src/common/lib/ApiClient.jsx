import axios from "axios"

const ApiClient = axios.create({
    baseURL: 'https://fakestoreapi.com/products',

})

export default ApiClient