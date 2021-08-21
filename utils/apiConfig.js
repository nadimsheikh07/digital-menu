import axios from 'axios';

let instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instance.interceptors.response.use(function (response) {
    return response;
}, (error) => {
    const { response } = error
    if (response.status == 401) {
        // logout
    }
    return Promise.reject(error);
})

export const apiConfig = instance
