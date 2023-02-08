import { loginUser } from '../Login/api';
import { baseURL } from '../util/baseURL';

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export async function addUser(newUser: CreateUserInput) {
  try {
    const { data } = await baseURL.post('/user/signup', newUser);
    return data;
  } catch (error: any) {
    throw Error(error.response.data);
  }
}
