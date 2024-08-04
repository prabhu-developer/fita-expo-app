import axios from "axios"

export const getProducts = async (limit) => {
    return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
}