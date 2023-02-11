import { baseServerURL } from '@utils/base-server-url';

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export async function createUser(newUser: CreateUserInput) {
  try {
    const { data } = await baseServerURL.post('/user/signup', newUser);
    return data;
  } catch (error: any) {
    throw Error(error.response.data);
  }
}
