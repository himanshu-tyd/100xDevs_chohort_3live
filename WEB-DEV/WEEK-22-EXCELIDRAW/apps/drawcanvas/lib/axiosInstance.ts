import axios from "axios";
import { BASE_URL_HTTP } from "./config";


const api=axios.create({
    baseURL: BASE_URL_HTTP,
    withCredentials:true
})

export  default api