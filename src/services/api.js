import axios from 'axios'

// 17650000/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api