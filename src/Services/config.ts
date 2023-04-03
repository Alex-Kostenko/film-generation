import axios, { AxiosInstance } from 'axios';

('https://api-filmgen-pearl.vercel.app');
const api: AxiosInstance = axios.create({
  baseURL: 'https://api-filmgen-pearl.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiAuth: AxiosInstance = axios.create({
  baseURL: 'https://api-filmgen-pearl.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config): Promise<any> => {
  const token = localStorage.getItem('access_token');
  if (config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.remove('access_token');
      // return router.push('/registration');
      return (window.location.href = '/registration');
    }
    return Promise.reject(error);
  },
);

export { apiAuth, api };
