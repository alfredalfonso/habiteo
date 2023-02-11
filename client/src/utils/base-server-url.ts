import axios from 'axios';

export const baseServerURL = axios.create({
  baseURL: 'http://localhost:3000',
});
