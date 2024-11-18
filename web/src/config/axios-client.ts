import axios from 'axios';

// Create an axios instance with custom configuration
const AxiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,  // Your base URL here
    headers: {
        'Content-Type': 'application/json',
        // Add any custom headers here if needed (e.g., Authorization)
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});

// Optionally, add interceptors (for request/response transformations or error handling)
AxiosClient.interceptors.request.use(
    (config) => {
        // Modify request config before sending (e.g., add auth tokens)
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

AxiosClient.interceptors.response.use(
    (response) => {
        // Modify response before passing it along
        return response.data;
    },
    (error) => {
        // Handle response errors
        console.error(error);
        return Promise.reject(error);
    }
);

export default AxiosClient;
