import axiosInstance from '@/config/http.config';

const baseURL = process.env.VUE_APP_BASE_URL;

export function reportAnsweredFormApi(payload, token) {
    return axiosInstance.post(`${baseURL}/answered-forms/report`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}