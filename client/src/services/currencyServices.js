import axios from "axios";

const baseURL = '/api/currency'

const getCurrencies = () =>{
    const request = axios.get(baseURL);
    return request.then(response => response.data)
}

const putCurrencies = (id,conversionRate) =>{
    const request = axios.put(`${baseURL}/${id}/${conversionRate}`)
    return request.then(response => response.data)
}

export default {getCurrencies,putCurrencies}