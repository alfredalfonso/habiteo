import axios from 'axios';

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const userAPI = axios.create({
  baseURL: 'http://localhost:3000',
});

export async function addUser(newUser: CreateUserInput) {
  try {
    const { data } = await userAPI.post('/user/signup', newUser);
    console.log(data);
  } catch (error: any) {
    throw Error(error.response.data);
  }
}

export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const { data } = await userAPI.post('/session/login', { email, password });
    console.log(data);
    return data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}

export default userAPI;
