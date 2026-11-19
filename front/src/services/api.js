import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "",
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use((config) => {
    let token = null;

    try {
        const persistido = JSON.parse(localStorage.getItem("auth-pulsar"));
        token = persistido?.state?.token ?? null;
    } catch {
        token = null;
    }

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default api;
