import axios from "axios";

export const baseUrl = 'http://localhost:8080';

const axiosInstance = axios.create ({
    baseURL: baseUrl
});

axiosInstance.interceptors.response.use (
    res => res.data,
    err => {
        console.log(err, "err message");
    }
);

export { axiosInstance };