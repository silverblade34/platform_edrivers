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
    return axiosInstance.post(`${baseURL}/administrator`,payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function updateadministratorApi(payload, token, id) {

    return axiosInstance.patch(`${baseURL}/administrator/${id}`,payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
