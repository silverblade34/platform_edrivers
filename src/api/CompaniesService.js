import axiosInstance from '@/config/http.config';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllCompanyApi(token) {
    return axiosInstance.get(`${baseURL}/company`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function createCompanyApi(payload, token) {
    return axiosInstance.post(`${baseURL}/company`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }, payload)
}
