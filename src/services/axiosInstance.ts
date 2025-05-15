import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-api-base-url.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    // Add token if needed
    const token = 'your-access-token';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
