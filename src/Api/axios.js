import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://127.0.0.1:5001/fir-196c7/us-central1/api",
})

export {axiosInstance};