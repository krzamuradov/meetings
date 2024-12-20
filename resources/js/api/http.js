import axios from "axios";

const http = axios.create({
    baseURL: "http://10.96.222.18/api",
    timeout: 15000,
});

const successRequest = (config) => {
    return config;
};
const successResponse = (response) => {
    return response;
};
const errorResponse = (error) => {
    return Promise.reject(error);
};

http.interceptors.request.use(successRequest);
http.interceptors.response.use(successResponse, errorResponse);

export default http;
