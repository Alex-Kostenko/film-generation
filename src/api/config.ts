import axios, { AxiosInstance } from 'axios';

// const apiURL: string | undefined = process.env.REACT_APP_API_URL;
// console.log(apiURL);

const api: AxiosInstance = axios.create({
  baseURL: 'https://api-filmgen.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
