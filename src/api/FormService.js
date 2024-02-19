import axiosInstance from '@/config/http.config';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllFormApi(token) {
    return axiosInstance.get(`${baseURL}/forms`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function createFormApi(payload, token) {
    return axiosInstance.post(`${baseURL}/forms`,payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
