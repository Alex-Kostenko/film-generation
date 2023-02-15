import axios, { AxiosInstance } from 'axios';

('https://api-filmgen-pearl.vercel.app');
const api: AxiosInstance = axios.create({
  baseURL: 'https://api-filmgen-pearl.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
