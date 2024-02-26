import axios, { AxiosRequestConfig, AxiosResponse }  from "axios"

const axio = axios.create({
    baseURL :'http://localhost:3001',
    headers : {
        'Content-Type' : 'application/json'
    }
})

axio.interceptors.request.use(function (config){
    return config
} , function (error){
    return Promise.reject(error)
})

axio.interceptors.response.use(function (response : AxiosResponse) {
    return response.data
} , function (error) {
    return  Promise.reject(error)
})

export default axio