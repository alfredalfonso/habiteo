import axios from 'axios';

export interface User {
  name: string;
  email: string;
  password: string;
}

const userAPI = axios.create({
  baseURL: 'http://localhost:3000',
});

export async function addUser(newUser: User) {
  return await userAPI.post('/signup', newUser);
}

export default userAPI;
