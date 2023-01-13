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

export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const { data } = await userAPI.post('/login', { email, password });
    return data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}

export default userAPI;
