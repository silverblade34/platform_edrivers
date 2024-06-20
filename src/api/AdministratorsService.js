import axiosInstance from '@/config/http.config';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAlladministratorsApi(token) {
    return axiosInstance.get(`${baseURL}/administrator`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function createadministratorsApi(payload, token) {
    console.log("gaaaaaaaaaaaaaa",payload)
    console.log("gaaaaaaaaaaaaaa",token)
    return axiosInstance.post(`${baseURL}/administrator`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }, payload)
}
