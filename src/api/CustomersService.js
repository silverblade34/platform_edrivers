import axiosInstance from '@/config/http.config';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllCustomersApi(token) {
    return axiosInstance.get(`${baseURL}/customers`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function createCustomersApi(payload, token) {
    return axiosInstance.post(`${baseURL}/customers`,payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function updateCustomerApi(payload, token, id) {
    console.log("gaaaaaaaaaaaaaaaa",id)
    return axiosInstance.patch(`${baseURL}/customers/${id}`,payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function deleteCustomerApi(token, id) {
    return axiosInstance.delete(`${baseURL}/customers/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

