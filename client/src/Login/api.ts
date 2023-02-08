import { baseURL } from '../util/baseURL';

export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const { data } = await baseURL.post('/session/login', { email, password });
    console.log(data);
    return data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}
