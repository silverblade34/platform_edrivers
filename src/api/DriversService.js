import axiosInstance from '@/config/http.config';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllDriversApi(token) {
    return axiosInstance.get(`${baseURL}/drivers`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
