import axios from "axios";

export const apiInstance = axios.create({
    baseURL: "https://be-banyu-go.vercel.app",
    withCredentials: true,
});
