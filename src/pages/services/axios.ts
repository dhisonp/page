import axios from 'axios';

const plAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PAYLOAD_URL,
  timeout: 3000,
});

export default plAxios;
