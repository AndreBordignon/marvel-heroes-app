import axios from 'axios';

const api = axios.create({
  baseURL: 'https://marvel-heroes-api.vercel.app/api/',
});

export default api;
